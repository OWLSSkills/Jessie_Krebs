"use client";

import { useMemo, useState, useEffect } from "react";
import styles from "./ContactInquiryForm.module.css";
import { SquareButton } from "../interaction/SquareButton";
import { PrivacyPolicyModal } from "../modals/PrivacyPolicy/PrivacyPolicyModal";
import { TermsConditionsModal } from "../modals/TermsAndConditions/TermsAndConditionsModal";

type ExperienceFor = "company" | "private-group" | "other" | "";

type FormatOption =
    | "keynote-talk"
    | "half-day-workshop"
    | "full-day-immersion"
    | "multi-day-retreat"
    | "weekend-intensive"
    | "ongoing-program"
    | "custom-format"
    | "online"
    | "not-sure-yet";

type DateRange = {
    id: string;
    start: string;
    end: string;
};

type FormState = {
    experienceFor: ExperienceFor;
    followUp: string;
    organizerName: string;
    roleTitle: string;
    email: string;
    phone: string;
    address1: string;
    address2: string;
    city: string;
    zip: string;
    formats: FormatOption[];
    dateRanges: DateRange[];
    groupSize: string;
    objectives: string;
    agreedToTerms: boolean;
    stateProvince: string;
    country: string;
};

type ErrorState = Partial<Record<string, string>>;

const FORMAT_OPTIONS: { value: FormatOption; label: string }[] = [
    { value: "keynote-talk", label: "Keynote talk" },
    { value: "half-day-workshop", label: "Half-day workshop" },
    { value: "full-day-immersion", label: "Full-day immersion" },
    { value: "multi-day-retreat", label: "Multi-day retreat" },
    { value: "weekend-intensive", label: "Weekend intensive" },
    { value: "ongoing-program", label: "Ongoing program" },
    { value: "custom-format", label: "Custom format" },
    { value: "online", label: "Online" },
    { value: "not-sure-yet", label: "Not sure yet — open to suggestions" },
];

function makeRange(idSuffix: number): DateRange {
    return {
        id: `range-${idSuffix}`,
        start: "",
        end: "",
    };
}

export function ContactInquiryForm() {
    const [form, setForm] = useState<FormState>({
        experienceFor: "",
        followUp: "",
        organizerName: "",
        roleTitle: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        zip: "",
        formats: [],
        dateRanges: [makeRange(1)],
        groupSize: "",
        objectives: "",
        agreedToTerms: false,
        stateProvince: "",
        country: "",
    });
    const [isTermsOpen, setIsTermsOpen] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [lastSubmittedMessage, setLastSubmittedMessage] = useState("");
    const [errors, setErrors] = useState<ErrorState>({});
    const [submitted, setSubmitted] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [submitMessage, setSubmitMessage] = useState("");
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const followUpLabel = useMemo(() => {
        if (form.experienceFor === "company") {
            return "What is the name of the company or organization?";
        }

        if (form.experienceFor === "other") {
            return "Can you elaborate on the other?";
        }

        return "";
    }, [form.experienceFor]);

    function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
        setForm((prev) => ({
            ...prev,
            [key]: value,
        }));

        setErrors((prev) => {
            const next = { ...prev };
            delete next[key];
            return next;
        });
    }

    function toggleFormat(value: FormatOption) {
        setForm((prev) => {
            const exists = prev.formats.includes(value);

            return {
                ...prev,
                formats: exists
                    ? prev.formats.filter((item) => item !== value)
                    : [...prev.formats, value],
            };
        });

        setErrors((prev) => {
            const next = { ...prev };
            delete next.formats;
            return next;
        });
    }

    function updateDateRange(id: string, key: "start" | "end", value: string) {
        setForm((prev) => ({
            ...prev,
            dateRanges: prev.dateRanges.map((range) =>
                range.id === id ? { ...range, [key]: value } : range
            ),
        }));

        setErrors((prev) => {
            const next = { ...prev };
            delete next.dateRanges;
            return next;
        });
    }

    function addDateRange() {
        setForm((prev) => {
            if (prev.dateRanges.length >= 5) return prev;

            return {
                ...prev,
                dateRanges: [...prev.dateRanges, makeRange(prev.dateRanges.length + 1)],
            };
        });
    }

    function removeDateRange(id: string) {
        setForm((prev) => {
            if (prev.dateRanges.length === 1) return prev;

            return {
                ...prev,
                dateRanges: prev.dateRanges.filter((range) => range.id !== id),
            };
        });
    }

    function validate(): ErrorState {
        const nextErrors: ErrorState = {};
        if (!form.stateProvince.trim()) {
            nextErrors.stateProvince = "State / Province is required.";
        }

        if (!form.country.trim()) {
            nextErrors.country = "Country is required.";
        }

        if (!form.experienceFor) {
            nextErrors.experienceFor = "Please choose who this experience is for.";
        }

        if (!form.organizerName.trim()) {
            nextErrors.organizerName = "Organizer name is required.";
        }

        if (!form.email.trim()) {
            nextErrors.email = "Email is required.";
        }

        if (!form.address1.trim()) {
            nextErrors.address1 = "Address is required.";
        }

        if (!form.city.trim()) {
            nextErrors.city = "City is required.";
        }

        if (!form.zip.trim()) {
            nextErrors.zip = "ZIP is required.";
        }

        if (form.formats.length === 0) {
            nextErrors.formats = "Please select at least one format.";
        }

        const hasAtLeastOneCompleteRange = form.dateRanges.some(
            (range) => range.start && range.end
        );

        const hasInvalidPartialRange = form.dateRanges.some(
            (range) => (range.start && !range.end) || (!range.start && range.end)
        );

        if (!hasAtLeastOneCompleteRange) {
            nextErrors.dateRanges = "Please select at least one date range.";
        } else if (hasInvalidPartialRange) {
            nextErrors.dateRanges = "Each date range must have both a start and end date.";
        }

        if (!form.groupSize.trim()) {
            nextErrors.groupSize = "Group size is required.";
        }

        if (!form.objectives.trim()) {
            nextErrors.objectives = "Please share your goals and anything we should know.";
        }

        if (!form.agreedToTerms) {
            nextErrors.agreedToTerms = "You must agree before submitting.";
        }

        return nextErrors;
    }







    function formatExperienceFor() {
        switch (form.experienceFor) {
            case "company":
                return form.followUp.trim() || "a company or organization";
            case "other":
                return form.followUp.trim() || "other";
            case "private-group":
                return "a private group";
            default:
                return "an unspecified group";
        }
    }

    function formatServiceLabel(value: FormatOption) {
        const match = FORMAT_OPTIONS.find((option) => option.value === value);
        return match?.label ?? value;
    }

    function formatDateForDisplay(dateString: string) {
        if (!dateString) return "";

        const date = new Date(`${dateString}T12:00:00`);

        return new Intl.DateTimeFormat("en-US", {
            timeZone: "America/Denver",
            month: "long",
            day: "numeric",
            year: "numeric",
        }).format(date);
    }

    function formatDateRangesForMessage() {
        return form.dateRanges
            .filter((range) => range.start && range.end)
            .map(
                (range) =>
                    `• ${formatDateForDisplay(range.start)} to ${formatDateForDisplay(range.end)}`
            )
            .join("\n");
    }

    function formatLocation() {
        const parts = [
            form.address1.trim(),
            form.address2.trim(),
            form.city.trim(),
            form.stateProvince.trim(),
            form.zip.trim(),
            form.country.trim(),
        ].filter(Boolean);

        return parts.join(", ");
    }

    function formatSubmittedTimestampMt() {
        return new Intl.DateTimeFormat("en-US", {
            timeZone: "America/Denver",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            timeZoneName: "short",
        }).format(new Date());
    }

    function buildSubmissionMessage() {
        const organizer = form.organizerName.trim();
        const groupSize = form.groupSize.trim();
        const experienceFor = formatExperienceFor();
        const services = form.formats
            .map((service) => `• ${formatServiceLabel(service)}`)
            .join("\n");
        const dateRanges = formatDateRangesForMessage();
        const location = formatLocation();
        const goals = form.objectives.trim();
        const email = form.email.trim();
        const phone = form.phone.trim();
        const timestamp = formatSubmittedTimestampMt();

        return `${organizer} is organizing an experience for ${groupSize} people from ${experienceFor} and would like to schedule the following services:
${services}

On the following date ranges:
${dateRanges}

At:
${location}

These are the goals that ${organizer} has for their group:
${goals}

You can contact ${organizer} at:
${email}${phone ? `\n${phone}` : ""}

${organizer} submitted at ${timestamp}.`;
    }


    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const nextErrors = validate();
        setErrors(nextErrors);
        setSubmitted(true);
        setSubmitMessage("");

        if (Object.keys(nextErrors).length > 0) {
            setSubmitStatus("error");
            return;
        }

        const message = buildSubmissionMessage();

        try {
            setSubmitStatus("sending");

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    subject: "NEW CUSTOM COURSE REQUEST!!!",
                    message,
                    formData: form,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data?.message || "Unable to send request.");
            }

            console.log("Human-readable submission:\n", message);
            setSubmitStatus("success");
            setSubmitMessage("Your request was sent successfully.");
            setLastSubmittedMessage(message);
            setShowSuccessModal(true);
        } catch (error) {
            console.error(error);
            setSubmitStatus("error");
            setSubmitMessage(
                error instanceof Error
                    ? error.message
                    : "Something went wrong while sending your request."
            );
        }
    }


    useEffect(() => {
        if (!showSuccessModal) return;

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setShowSuccessModal(false);
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [showSuccessModal]);
    return (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <section className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>1. Who is this experience for?</h2>

                <fieldset className={styles.fieldset}>
                    <legend className={styles.srOnly}>Who is this experience for?</legend>

                    <div className={styles.radioGroup}>
                        <label className={styles.choiceRow}>
                            <input
                                type="radio"
                                name="experienceFor"
                                value="company"
                                checked={form.experienceFor === "company"}
                                onChange={() => updateField("experienceFor", "company")}
                            />
                            <span>A company or organization</span>
                        </label>

                        <label className={styles.choiceRow}>
                            <input
                                type="radio"
                                name="experienceFor"
                                value="private-group"
                                checked={form.experienceFor === "private-group"}
                                onChange={() => updateField("experienceFor", "private-group")}
                            />
                            <span>A private group</span>
                        </label>

                        <label className={styles.choiceRow}>
                            <input
                                type="radio"
                                name="experienceFor"
                                value="other"
                                checked={form.experienceFor === "other"}
                                onChange={() => updateField("experienceFor", "other")}
                            />
                            <span>Other</span>
                        </label>
                    </div>
                </fieldset>

                {errors.experienceFor && (
                    <p className={styles.errorText}>{errors.experienceFor}</p>
                )}

                {followUpLabel ? (
                    <div className={styles.fieldBlock}>
                        <label className={styles.label} htmlFor="followUp">
                            {followUpLabel}
                        </label>
                        <input
                            id="followUp"
                            className={styles.input}
                            type="text"
                            value={form.followUp}
                            onChange={(e) => updateField("followUp", e.target.value)}
                        />
                    </div>
                ) : null}
            </section>

            <section className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>2. Primary Contact</h2>

                <div className={styles.gridTwo}>
                    <div className={styles.fieldBlock}>
                        <label className={styles.label} htmlFor="organizerName">
                            Name of the person organizing the event: <span className={styles.required}>*</span>
                        </label>
                        <input
                            id="organizerName"
                            className={styles.input}
                            type="text"
                            value={form.organizerName}
                            onChange={(e) => updateField("organizerName", e.target.value)}
                        />
                        {errors.organizerName && (
                            <p className={styles.errorText}>{errors.organizerName}</p>
                        )}
                    </div>

                    <div className={styles.fieldBlock}>
                        <label className={styles.label} htmlFor="roleTitle">
                            Role/Title (if applicable)
                        </label>
                        <input
                            id="roleTitle"
                            className={styles.input}
                            type="text"
                            value={form.roleTitle}
                            onChange={(e) => updateField("roleTitle", e.target.value)}
                        />
                    </div>

                    <div className={styles.fieldBlock}>
                        <label className={styles.label} htmlFor="email">
                            Email: <span className={styles.required}>*</span>
                        </label>
                        <input
                            id="email"
                            className={styles.input}
                            type="email"
                            value={form.email}
                            onChange={(e) => updateField("email", e.target.value)}
                        />
                        {errors.email && <p className={styles.errorText}>{errors.email}</p>}
                    </div>

                    <div className={styles.fieldBlock}>
                        <label className={styles.label} htmlFor="phone">
                            Phone: Optional
                        </label>
                        <input
                            id="phone"
                            className={styles.input}
                            type="tel"
                            value={form.phone}
                            onChange={(e) => updateField("phone", e.target.value)}
                        />
                    </div>
                </div>
            </section>

            <section className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>3. Preferred Location</h2>

                <p className={styles.helperText}>Where would you like to hold the course?</p>

                <div className={styles.gridTwo}>
                    <div className={styles.fieldBlock}>
                        <label className={styles.label} htmlFor="address1">
                            Address: <span className={styles.required}>*</span>
                        </label>
                        <input
                            id="address1"
                            className={styles.input}
                            type="text"
                            value={form.address1}
                            onChange={(e) => updateField("address1", e.target.value)}
                        />
                        {errors.address1 && (
                            <p className={styles.errorText}>{errors.address1}</p>
                        )}
                    </div>

                    <div className={styles.fieldBlock}>
                        <label className={styles.label} htmlFor="address2">
                            Address Secondary: Optional
                        </label>
                        <input
                            id="address2"
                            className={styles.input}
                            type="text"
                            value={form.address2}
                            onChange={(e) => updateField("address2", e.target.value)}
                        />
                    </div>

                    <div className={styles.fieldBlock}>
                        <label className={styles.label} htmlFor="city">
                            City: <span className={styles.required}>*</span>
                        </label>
                        <input
                            id="city"
                            className={styles.input}
                            type="text"
                            value={form.city}
                            onChange={(e) => updateField("city", e.target.value)}
                        />
                        {errors.city && <p className={styles.errorText}>{errors.city}</p>}
                    </div>

                    <div className={styles.fieldBlock}>
                        <label className={styles.label} htmlFor="stateProvince">
                            State / Province: <span className={styles.required}>*</span>
                        </label>
                        <input
                            id="stateProvince"
                            className={styles.input}
                            type="text"
                            value={form.stateProvince}
                            onChange={(e) => updateField("stateProvince", e.target.value)}
                        />
                        {errors.stateProvince && (
                            <p className={styles.errorText}>{errors.stateProvince}</p>
                        )}
                    </div>

                    <div className={styles.fieldBlock}>
                        <label className={styles.label} htmlFor="zip">
                            ZIP: <span className={styles.required}>*</span>
                        </label>
                        <input
                            id="zip"
                            className={styles.input}
                            type="text"
                            value={form.zip}
                            onChange={(e) => updateField("zip", e.target.value)}
                        />
                        {errors.zip && <p className={styles.errorText}>{errors.zip}</p>}
                    </div>

                    <div className={styles.fieldBlock}>
                        <label className={styles.label} htmlFor="country">
                            Country: <span className={styles.required}>*</span>
                        </label>
                        <input
                            id="country"
                            className={styles.input}
                            type="text"
                            value={form.country}
                            onChange={(e) => updateField("country", e.target.value)}
                        />
                        {errors.country && (
                            <p className={styles.errorText}>{errors.country}</p>
                        )}
                    </div>
                </div>
            </section>

            <section className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>4. Format &amp; Duration</h2>

                <p className={styles.helperText}>
                    Approximately how many hours or days of instruction would you like?
                </p>

                <div className={styles.checkboxGrid}>
                    {FORMAT_OPTIONS.map((option) => (
                        <label key={option.value} className={styles.choiceRow}>
                            <input
                                type="checkbox"
                                checked={form.formats.includes(option.value)}
                                onChange={() => toggleFormat(option.value)}
                            />
                            <span>{option.label}</span>
                        </label>
                    ))}
                </div>

                {errors.formats && <p className={styles.errorText}>{errors.formats}</p>}
            </section>

            <section className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>5. Ideal Dates</h2>

                <p className={styles.helperText}>
                    What are your desired date options? Having a few potential dates and reaching
                    out at least 8 months in advance will drastically increase the odds of availability.
                </p>

                <div className={styles.dateRangeList}>
                    {form.dateRanges.map((range, index) => {
                        const selectedLabel =
                            range.start && range.end
                                ? `Selected range ${index + 1}: ${range.start} → ${range.end}`
                                : `Range ${index + 1}: not complete yet`;

                        return (
                            <div key={range.id} className={styles.dateRangeCard}>
                                <div className={styles.dateRangeHeader}>
                                    <strong>Option {index + 1}</strong>
                                    {form.dateRanges.length > 1 ? (
                                        <button
                                            type="button"
                                            className={styles.removeButton}
                                            onClick={() => removeDateRange(range.id)}
                                        >
                                            Remove
                                        </button>
                                    ) : null}
                                </div>

                                <div className={styles.gridTwo}>
                                    <div className={styles.fieldBlock}>
                                        <label className={styles.label} htmlFor={`${range.id}-start`}>
                                            Start date
                                        </label>
                                        <input
                                            id={`${range.id}-start`}
                                            className={`${styles.input} ${styles.dateInput}`}
                                            type="date"
                                            value={range.start}
                                            onChange={(e) =>
                                                updateDateRange(range.id, "start", e.target.value)
                                            }
                                            onClick={(e) => {
                                                const input = e.currentTarget;
                                                if ("showPicker" in input) {
                                                    input.showPicker();
                                                }
                                            }}
                                        />
                                    </div>

                                    <div className={styles.fieldBlock}>
                                        <label className={styles.label} htmlFor={`${range.id}-end`}>
                                            End date
                                        </label>
                                        <input
                                            id={`${range.id}-end`}
                                            className={`${styles.input} ${styles.dateInput}`}
                                            type="date"
                                            value={range.end}
                                            onChange={(e) =>
                                                updateDateRange(range.id, "end", e.target.value)
                                            }
                                            onClick={(e) => {
                                                const input = e.currentTarget;
                                                if ("showPicker" in input) {
                                                    input.showPicker();
                                                }
                                            }}
                                        />
                                    </div>
                                </div>

                                <p className={styles.rangeFeedback}>{selectedLabel}</p>
                            </div>
                        );
                    })}
                </div>

                <div className={styles.inlineActions}>
                    <button
                        type="button"
                        className={styles.secondaryButton}
                        onClick={addDateRange}
                        disabled={form.dateRanges.length >= 5}
                    >
                        Add another date-range
                    </button>
                </div>

                {errors.dateRanges && (
                    <p className={styles.errorText}>{errors.dateRanges}</p>
                )}
            </section>

            <section className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>6. Group Size</h2>

                <div className={styles.fieldBlock}>
                    <label className={styles.label} htmlFor="groupSize">
                        How many folks do you anticipate will be attending?{" "}
                        <span className={styles.required}>*</span>
                    </label>
                    <input
                        id="groupSize"
                        className={styles.input}
                        type="number"
                        value={form.groupSize}
                        onChange={(e) => updateField("groupSize", e.target.value)}
                    />
                    {errors.groupSize && (
                        <p className={styles.errorText}>{errors.groupSize}</p>
                    )}
                </div>
            </section>

            <section className={styles.sectionBlock}>
                <h2 className={styles.sectionTitle}>7. Objectives &amp; Outcomes</h2>

                <div className={styles.fieldBlock}>
                    <label className={styles.label} htmlFor="objectives">
                        What are your goals for the course, and is there anything else we should know?
                    </label>
                    <textarea
                        id="objectives"
                        className={styles.textarea}
                        value={form.objectives}
                        onChange={(e) => updateField("objectives", e.target.value)}
                        rows={8}
                    />
                    {errors.objectives && (
                        <p className={styles.errorText}>{errors.objectives}</p>
                    )}
                </div>
            </section>

            <section className={styles.sectionBlock}>
                <label className={styles.choiceRow}>
                    <input
                        type="checkbox"
                        checked={form.agreedToTerms}
                        onChange={(e) => updateField("agreedToTerms", e.target.checked)}
                    />
                    <span>
                        By sending an email to OWLS Skills, I agree to OWLS Skills{" "}
                        <button
                            type="button"
                            className={styles.privacyButton}
                            onClick={() => setIsTermsOpen(true)}
                        >
                            Terms & Conditions
                        </button> and{" "}
                        <button
                            type="button"
                            className={styles.privacyButton}
                            onClick={() => setIsPrivacyOpen(true)}
                        >
                            Privacy Policy
                        </button>
                    </span>
                </label>

                {errors.agreedToTerms && (
                    <p className={styles.errorText}>{errors.agreedToTerms}</p>
                )}
            </section>

            <div className={styles.submitRow}>
                <SquareButton type="submit" shape="rounded" disabled={submitStatus === "sending"}>
                    {submitStatus === "sending" ? "SENDING..." : "LET THE ADVENTURE BEGIN"}
                </SquareButton>
            </div>

            {submitStatus === "success" ? (
                <p className={styles.successText}>{submitMessage}</p>
            ) : null}

            {submitStatus === "error" && submitMessage ? (
                <p className={styles.errorTextGlobal}>{submitMessage}</p>
            ) : null}

            {submitted && Object.keys(errors).length === 0 ? (
                <p className={styles.successText}>
                    All Required fields completed! Feel free to submit!
                </p>
            ) : null}



            {showSuccessModal ? (
                <div
                    className={styles.modalOverlay}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="contact-success-title"
                    onClick={() => setShowSuccessModal(false)}
                >
                    <div
                        className={styles.modalCard}
                        onClick={(event) => event.stopPropagation()}
                    >
                        <h2 id="contact-success-title" className={styles.modalTitle}>
                            Request Sent Successfully
                        </h2>

                        <p className={styles.modalIntro}>
                            Your custom course request has been sent to Jessie. Here is the message that was sent:
                        </p>

                        <div className={styles.messagePreview}>
                            <pre className={styles.messagePreviewText}>{lastSubmittedMessage}</pre>
                        </div>

                        <div className={styles.modalActions}>
                            <SquareButton href="/" shape="rounded">
                                RETURN HOME
                            </SquareButton>
                        </div>
                    </div>
                </div>
            ) : null}

        </form>


    );
}