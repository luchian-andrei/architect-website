import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="p-8 my-6 ">
      <h2 className="text-3xl border-b-2 border-gray-200 py-6">Contact</h2>

      <p className="py-4">
        Let's get in touch and talk about your next project.
      </p>
      <form
        className="flex flex-col py-4"
        onSubmit={() => alert("Unavailable for the moment.")}
      >
        <input
          required
          type="text"
          placeholder="Name"
          className="px-2 py-2 my-3 border-[1px] border-gray-300 text-lg placeholder:text-gray-600"
        />
        <input
          required
          type="text"
          placeholder="Email"
          className="px-2 py-2 my-3 border-[1px] border-gray-300 text-lg placeholder:text-gray-600"
        />
        <input
          required
          type="text"
          placeholder="Subject"
          className="px-2 py-2 my-3 border-[1px] border-gray-300 text-lg placeholder:text-gray-600"
        />
        <input
          required
          type="text"
          placeholder="Comment"
          className="px-2 py-2 my-3 border-[1px] border-gray-300 text-lg placeholder:text-gray-600"
        />
        <button
          type="submit"
          className="bg-black font-semibold text-white w-1/3 p-3 my-4 hover:bg-stone-300 hover:text-black"
        >
          SEND MESSAGE
        </button>
      </form>

      <img src="./images/street.png" alt="street" />
    </section>
  );
};

export default Contact;
