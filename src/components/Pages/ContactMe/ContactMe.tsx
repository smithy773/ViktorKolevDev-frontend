import PageCont from "../../Helpers/PageCont/PageCont";

function ContactMe() {
  return (
    <PageCont
      title="Contact me"
      description="This is where you can contact me! If you have any questions, want to work with me or just want to say hi, feel free to send me a message! I will try to respond as soon as possible. I might be busy with work or other projects, but I'll try my best to respond to all messages. You can also find my email address and social media links down below if you prefer to contact me that way!"
    >
      <div className="flex justify-center w-full">
        <form
          id="contact-form"
          className="flex flex-col bg-item-background p-6 w-full mx-25"
        >
          <input type="hidden" name="time" value="Mar 10 2025 08:46" />
          <section className="flex gap-5 justify-between">
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
                className="contact-input"
                type="email"
                name="email"
                required
              />
            </div>
          </section>
          <div className="contact-label-input-div">
            <label className="contact-label">Subject</label>
            <input
              className="contact-input"
              type="text"
              name="title"
              required
            />
          </div>
          <label className="contact-label">Message</label>
          <textarea
            className="contact-input"
            name="message"
            required
          ></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </PageCont>
  );
}

export default ContactMe;
