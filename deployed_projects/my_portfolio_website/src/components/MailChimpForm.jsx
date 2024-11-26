import MailchimpSubscribe from "react-mailchimp-subscribe";
import { NewsLetter } from "./NewsLetter";

export const MailChimpForm = () => {
  const mailchimpUrl = import.meta.env.VITE_MAILCHIMP_URL;
  const mailchimpU = import.meta.env.VITE_MAILCHIMP_U;
  const mailchimpId = import.meta.env.VITE_MAILCHIMP_ID;

  // Check if environment variables are set
  if (!mailchimpUrl || !mailchimpU || !mailchimpId) {
    console.error('Mailchimp environment variables are not properly configured');
    return null;
  }

  const postUrl = `${mailchimpUrl}?u=${mailchimpU}&id=${mailchimpId}`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <NewsLetter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </>
  );
};