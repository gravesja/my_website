export default function Contact() {
    return (
      <div>
        <h1>Contact Me</h1>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
  