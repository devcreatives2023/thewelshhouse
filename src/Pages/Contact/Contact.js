import React from "react";
import facebook1 from "../images/facebook1.png";
import instagram1 from "../images/instagram1.png";
import youtube1 from "../images/youtube1.png";
import twitter1 from "../images/twitter1.png";
import "../Contact.css";

const Contact = () => {
  return (
    <div className="flex justify-between gap-16 mb-28 contact">
      <div className="text-left w-full">
        <h3 className="text-[#822C1E] font-bold text-xl mb-4">INFORMATION</h3>
        <p>
          Poutine taxidermy helvetica narwhal sustainable gatekeep vegan.
          Pickled venmo affogato, skateboard banh mi iPhone shabby chic trust
          fund drinking vinegar synth etsy tumblr.{" "}
        </p>
        <p className="mt-8">Email</p>
        <p className="font-bold">info@example.com</p>
        <p className="mt-8">Telephone</p>
        <p>07889 790059</p>
        <p className="mt-8">
          A member of the team will get back to you as soon as possible.
        </p>

        <h3 className="text-[#822C1E] font-bold mt-24 text-xl mb-2">
          SOCIAL NETWORKS
        </h3>
        <p>
          Vape mumblecore sustainable poutine, taxidermy direct trade street art
          lo-fi poke. Brooklyn helvetica marfa taiyaki everyday carry poutine.{" "}
        </p>

        <div className="flex gap-2 items-center w-full mt-20">
          <img className="icon1" src={facebook1} alt="" />
          <img className="icon" src={twitter1} alt="" />
          <img className="icon" src={instagram1} alt="" />
          <img className="icon" src={youtube1} alt="" />
        </div>

        <div className="mt-20">
          <h3 className="pb-4 pt-20 text-xl text-[#822C1E]">NEWSLETTER</h3>
          <p className="pb-6">
            Sign up with your email address to receive all the latest news.
          </p>

          <p className="mt-8">
            *Please note that your information will be shared with any third
            party.
          </p>
        </div>
      </div>

      <div className="w-full text-left">
        <h3 className="text-[#822C1E] font-bold text-xl mb-4">CONTACT</h3>
        <p className="pb-2">Name*</p>
        <div className="flex gap-2 w-full">
          <div className="w-full">
            <input
              className=" w-full h-12 border py-2 border-slate-300"
              type="text"
            />
            <p>First Name</p>
          </div>
          <div className="w-full">
            <input
              className=" w-full h-12 border py-2 border-slate-300"
              type="text"
            />
            <p>Last Name</p>
          </div>
        </div>
        <div className="mt-8">
          <p className="mb-2">Email Address *</p>
          <input className=" w-full h-12 border py-2 " type="text" />
        </div>
        <div className="mt-8">
          <p className="mb-2">Subject *</p>
          <input className=" w-full h-12 border py-2 " type="text" />
        </div>
        <div className="mt-8">
          <p className="mb-2">Message *</p>
          <textarea
            className="border border-slate-300"
            name=""
            id=""
            cols="80"
            rows="5"
          ></textarea>
        </div>

        <input
          className="btn rounded-none w-36 bg-black mt-6"
          type="submit"
          value="Submit"
        />

        <div className="pt-36">
          <h3 className=" text-xl text-[#822C1E] ">SIGN UP</h3>
          <div className="mt-4">
            <p className="mb-2">Email Address *</p>
            <input className=" w-full h-12 border py-2 " type="text" />
            <input
              className="btn rounded-none w-36 bg-black mt-8"
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
