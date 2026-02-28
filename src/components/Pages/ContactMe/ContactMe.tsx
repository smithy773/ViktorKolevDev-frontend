import PageCont from "../../Helpers/PageCont/PageCont";
import emailjs from "@emailjs/browser";

emailjs.init({ publicKey: "7Hmud7QnYWYG4CcBD" });

function ContactMe() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // @ts-ignore
    emailjs
      .sendForm("service_g2e1bkt", "template_g5lkrax", e.currentTarget)
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        },
      );
  };
  return (
    <PageCont
      title="Contact me"
      description="This is where you can contact me! If you have any questions, want to work with me or just want to say hi, feel free to send me a message! I will try to respond as soon as possible. I might be busy with work or other projects, but I'll try my best to respond to all messages. You can also find my email address and social media links down below if you prefer to contact me that way!"
    >
      <div className="flex justify-center w-full">
        <form
          id="contact-form"
          className="flex flex-col bg-item-background p-6 w-full mx-25 rounded-lg"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input type="hidden" name="time" value="Mar 10 2025 08:46" />
          <section className="grid grid-cols-2 grid-rows-6 gap-4">
            <div className="contact-label-input-div">
              <label className="contact-label">Name</label>
              <input
                className="contact-input"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="contact-label-input-div">
              <label className="contact-label">Email</label>
              <input
                className="contact-input text-lg p-1.5 w-full"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="contact-label-input-div col-span-2">
              <label className="contact-label">Subject</label>
              <input
                className="contact-input"
                type="text"
                name="title"
                required
              />
            </div>
            <div className="contact-label-input-div col-span-2 row-span-4">
              <label className="contact-label">Message</label>
              <textarea
                className="contact-input h-full"
                name="message"
                required
              ></textarea>
            </div>
          </section>
          <input
            type="submit"
            value="Send"
            className="formSubmitBtn mt-6 border font-semibold py-2 px-4 rounded cursor-pointer transition-all"
          />
        </form>
      </div>
    </PageCont>
  );
}

export default ContactMe;
