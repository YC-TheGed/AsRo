"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "./index.css";
import Image from "next/image";
import a from "./img/pexelsandreapiacquadio3772618@2x.png";
import b from "./img/pexelspixabay39691@2x.png";
import c from "./img/check-circle-fill.png";
import d from "./img/error-fill.png";

export default function Home() {
  const router = useRouter();

  const handleOrderClick = () => {
    router.push("https://torchged.pay.clickbank.net/?cbitems=1&cbur=a");
  };

  const handleDeclineOrderClick = () => {
    router.push("https://torchged.pay.clickbank.net/?cbitems=1&cbur=d");
  };

  return (
    <main style={{ backgroundColor: "#190b2c" }}>
      <div id="top">
        <h2>IMPORTANT: Do NOT Close This Window Or Click The "Back" Button.</h2>
        <h2>
          Clicking your "back" button will result in your order being
          double-billed
        </h2>
      </div>
      <div id="welcome" style={{ marginTop: "60px" }}>
        <h2 style={{ lineHeight: "50px" }}>
          One More Thing For You To Get More Out Of The Ultimate Astrology
          Frequency
        </h2>
        <h3>Hint: You Will Get The Power To Manifest Anything... Fast </h3>
      </div>
      <div id="letter">
        <p dir="ltr">
          <span>One more thing...</span>
        </p>
        <p dir="ltr">
          <span>
            ...And you will get the access to The Ultimate Astrology Frequency…
          </span>
        </p>
        <p dir="ltr">
          <span>We’ve saved the something good for you here…</span>
        </p>
        <p dir="ltr">
          <span>
            …And one more thing for you to get the most out of The Ultimate
            Astrology Frequency…
          </span>
        </p>
        <p dir="ltr">
          <span>When you got The Ultimate Astrology Frequency…</span>
        </p>
        <p dir="ltr">
          <span>You are able to receive your calling.</span>
        </p>
        <p dir="ltr">
          <span>
            Then on the previous page, we gave you the lock and key to avoid
            misfortune forever.
          </span>
        </p>
        <p dir="ltr">
          <span>So that you can live without worries and pain…</span>
        </p>
        <p dir="ltr">
          <span>…while having the power to live in the most optimum way.</span>
        </p>

        <h2 id="lh">
          <span>
            And Now We’re Going To Remove The Biggest Obstacle You Will Face To
            Manifest What You Want… Fast
          </span>
        </h2>
        <p dir="ltr">
          <span>You see.</span>
        </p>
        <p dir="ltr">
          <span>
            As you listen to The Ultimate Astrology Frequency, you are able to
            receive.
          </span>
        </p>
        <p dir="ltr">
          <span>
            When you go through The Lunar Prayer, you are able to keep.
          </span>
        </p>
        <p dir="ltr">
          <span>And what we are going to give you right now…</span>
        </p>
        <p dir="ltr">
          <span>
            …is the secret that will allow you to manifest your dream as fast as
            it can…
          </span>
        </p>
        <p dir="ltr">
          <span>…at any given moment in your life after the next 67 days.</span>
        </p>

        <h2 id="lh">
          <span>
            All You Need To Do Is Open Your Heart & Listen To The Cosmic
            Frequency{" "}
          </span>
        </h2>
        <p dir="ltr">
          <span>Yes, it’s that easy.</span>
        </p>
        <p dir="ltr">
          <span>As I saw the success stories flood in…</span>
        </p>
        <p dir="ltr">
          <span>Someone finally lose weight…</span>
        </p>
        <p dir="ltr">
          <span>Someone finally got promotions…</span>
        </p>
        <p dir="ltr">
          <span>Someone finally found their soulmate…</span>
        </p>
        <p dir="ltr">
          <span>I couldn't help but smile.</span>
        </p>
        <p dir="ltr">
          <span>
            Yet, I kept getting asked the same question again and again…
          </span>
        </p>

        <h2 id="lh">
          <span>“How Can I Manifest Everything Instantly?”</span>
        </h2>
        <p dir="ltr">
          <span>
            As good as it sounds that people can get all the results with The
            Ultimate Astrology Frequency and The Lunar Prayer…
          </span>
        </p>
        <p dir="ltr">
          <span>
            But the universe will not have the bandwidth to reply to everyone at
            the same time…
          </span>
        </p>
        <p dir="ltr">
          <span>
            Most people need to wait in order to see their manifestation…
          </span>
        </p>
        <p dir="ltr">
          <span>
            And they are always looking for ways to manifest with the cosmic
            power instantly…
          </span>
        </p>
        <p dir="ltr">
          <span>But unfortunately…</span>
        </p>
        <p dir="ltr">
          <span>
            The Mother Moon, the planets and the universe only have limited
            bandwidth…
          </span>
        </p>
        <p dir="ltr">
          <span>Which means…</span>
        </p>
        <p dir="ltr">
          <span>
            Even though you are going to manifest and receive everything you
            want after these 67 days…
          </span>
        </p>
        <p dir="ltr">
          <span>
            There will still be a gap of time between the moment you wish, and
            the moment you receive.
          </span>
        </p>
        <p dir="ltr">
          <span>And that’s the truth.</span>
        </p>
        <p dir="ltr">
          <span>The truth that…</span>
        </p>
        <p dir="ltr">
          <span>You will still need to wait.</span>
        </p>

        <h2 id="lh">
          <span>But I Don’t Want You To EVER Go Through This…</span>
        </h2>
        <p dir="ltr">
          <span>You see.</span>
        </p>
        <p dir="ltr">
          <span>As the chosen one…</span>
        </p>
        <p dir="ltr">
          <span>
            You have the permission to connect with the cosmic energy.
          </span>
        </p>
        <p dir="ltr">
          <span>As you are here…</span>
        </p>
        <p dir="ltr">
          <span>Your destiny has been calling you toward the right path.</span>
        </p>
        <p dir="ltr">
          <span>And as you are going to receive what you deserve…</span>
        </p>
        <p dir="ltr">
          <span>Chances are…</span>
        </p>
        <p dir="ltr">
          <span>
            You will not be able to manifest and receive them, INSTANTLY.
          </span>
        </p>

        <h2 id="lh">
          <span>
            So I Decided To Do Something That’s Never Been Done Before{" "}
          </span>
        </h2>
        <p dir="ltr">
          <span>
            I want to share the real secret that can allow you to manifest
            everything “instantly”.
          </span>
        </p>
        <p dir="ltr">
          <span>
            It is a secret that has only be known by those master astrologers…
          </span>
        </p>
        <p dir="ltr">
          <span>
            …they had been passing this down for the last thousands of years…
          </span>
        </p>
        <p dir="ltr">
          <span>No one is allowed to know unless…</span>
        </p>
        <p dir="ltr">
          <span>…they are the chosen ones.</span>
        </p>
        <p dir="ltr">
          <span>Which means…</span>
        </p>
        <p dir="ltr">
          <span>As you have been through the process till this very page…</span>
        </p>
        <p dir="ltr">
          <span>I know you have realized that…</span>
        </p>
        <p dir="ltr">
          <span>You are the chosen one.</span>
        </p>
        <p dir="ltr">
          <span>And you are allowed to know this secret.</span>
        </p>
        <p dir="ltr">
          <span>And yes, this can be the calling from the universe…</span>
        </p>
        <p dir="ltr">
          <span>This can also be the collateral luck…</span>
        </p>
        <p dir="ltr">
          <span>But one thing that is guaranteed is that…</span>
        </p>
        <p dir="ltr">
          <span>This is part of your destiny.</span>
        </p>
        <p dir="ltr">
          <span>It’s your destiny is calling you.</span>
        </p>
        <p dir="ltr">
          <span>…calling you to answer…</span>
        </p>
        <p dir="ltr">
          <span>
            …answer it to let you have the permission to manifest everything
            “instantly”.
          </span>
        </p>
        <p dir="ltr">
          <span>You can choose to answer or… stay silent.</span>
        </p>
        <p dir="ltr">
          <span>Because that’s all we can do.</span>
        </p>
        <p dir="ltr">
          <span>
            We can only help you receive the cosmic message and let you know…
          </span>
        </p>
        <p dir="ltr">
          <span>The door is now open for you.</span>
        </p>
        <p dir="ltr">
          <span>It may sound ridiculous…</span>
        </p>
        <p dir="ltr">
          <span>But that’s the reason we are here for you.</span>
        </p>

        <h2 id="lh">
          <span>
            We Are Here To Help You To Have The Secret That Allows You To
            Manifest Anything… “Instantly”
          </span>
        </h2>
        <p dir="ltr">
          <span>That’s why I am going to tell you that…</span>
        </p>
        <p dir="ltr">
          <span>For the first time ever…</span>
        </p>
        <p dir="ltr">
          <span>We are going to share this ancient secret with you here.</span>
        </p>
        <p dir="ltr">
          <span>Within a limited time…</span>
        </p>
        <p dir="ltr">
          <span>
            You can have this secret for yourself to manifest anything
            “instantly”.
          </span>
        </p>
        <p dir="ltr">
          <span>This secret is called the "Cosmic Invocation".</span>
        </p>
        <p dir="ltr">
          <span>
            It is a brain wave that can connect you with the most inner power of
            the universe, so when you want to manifest…
          </span>
        </p>
        <p dir="ltr">
          <span>
            The universe will hear your voice first instead of others.
          </span>
        </p>
        <p dir="ltr">
          <span>Which means, when you listen to this secret brain wave…</span>
        </p>
        <p dir="ltr">
          <span>You will be able to manifest anything instantly.</span>
        </p>
        <p dir="ltr">
          <span>
            And it is going to work for you once you listen to The Ultimate
            Astrology Frequency and The Lunar Prayer after the next 67 days.
          </span>
        </p>
        <p dir="ltr">
          <span>With this cosmic brain wave…</span>
        </p>

        <h2 id="lh">
          <span>
            You’re Getting Everything You Need To Manifest Anything In Your
            Entire Life
          </span>
        </h2>
        <p dir="ltr">
          <span>Take a moment and imagine this with me…</span>
        </p>
        <p dir="ltr">
          <span>You wake up one morning…</span>
        </p>
        <p dir="ltr">
          <span>…look at the view outside of your room…</span>
        </p>
        <p dir="ltr">
          <span>…and you let the light shine on you.</span>
        </p>
        <p dir="ltr">
          <span>You feel free.</span>
        </p>
        <p dir="ltr">
          <span>You feel warm.</span>
        </p>
        <p dir="ltr">
          <span>You feel so happy.</span>
        </p>
        <p dir="ltr">
          <span>Everything in your life set…</span>
        </p>
        <p dir="ltr">
          <span>…and you don't need to worry about anything anymore.</span>
        </p>
        <p dir="ltr">
          <span>You hug your lover who sleeps next to you…</span>
        </p>
        <p dir="ltr">
          <span>
            …knowing you have a relationship or marriage that is fulfilled and
            secure.
          </span>
        </p>
        <p dir="ltr">
          <span>You always share your story with other people…</span>
        </p>
        <p dir="ltr">
          <span>…your story about your life…</span>
        </p>
        <p dir="ltr">
          <span>…because they want to know how you become so successful.</span>
        </p>
        <p dir="ltr">
          <span>
            And you are able to share your fortune with the people you love…
          </span>
        </p>
        <p dir="ltr">
          <span>…so you can make sure not only you have prosperity…</span>
        </p>
        <p dir="ltr">
          <span>…but also the people you truly care about.</span>
        </p>
        <p dir="ltr">
          <span>And most importantly…</span>
        </p>
        <p dir="ltr">
          <span>All of you can have it easily.</span>
        </p>
        <p dir="ltr">
          <span>This doesn’t have to be a dream any longer...</span>
        </p>
        <p dir="ltr">
          <span>
            Because it is going to be your new reality with the Cosmic
            Invocation.
          </span>
        </p>

        <h2 id="lh">
          <span>This Is Something Most People Will NEVER Experience</span>
        </h2>
        <p dir="ltr">
          <span>It breaks my heart to even say it but… it's true.</span>
        </p>
        <p dir="ltr">
          <span>
            Most people will never be able to have the chance to experience that
            kind of life…
          </span>
        </p>
        <p dir="ltr">
          <span>
            …because they probably don’t even have the chance to have “Cosmic
            Invocation”…
          </span>
        </p>
        <p dir="ltr">
          <span>Even the people who can be on this page…</span>
        </p>
        <p dir="ltr">
          <span>They may not be able to experience that as well…</span>
        </p>
        <p dir="ltr">
          <span>
            Because they didn’t know how important it is to have the ability to
            manifest things instantly…
          </span>
        </p>
        <p dir="ltr">
          <span>
            And they have to go through the difficulties that they need to
            manifest something…
          </span>
        </p>
        <p dir="ltr">
          <span>…but they cannot have it instantly.</span>
        </p>
        <p dir="ltr">
          <span>
            Then they miss out the chance that can make their life significant…
          </span>
        </p>
        <p dir="ltr">
          <span>Become important to other people…</span>
        </p>
        <p dir="ltr">
          <span>Become irreplaceable to other people…</span>
        </p>
        <p dir="ltr">
          <span>Become the people other people truly care…</span>
        </p>
        <p dir="ltr">
          <span>They cannot have it…</span>
        </p>
        <p dir="ltr">
          <span>All because they cannot manifest things instantly.</span>
        </p>
        <p dir="ltr">
          <span>But I don’t know what you would like…</span>
        </p>
        <p dir="ltr">
          <span>As I had just shared with you…</span>
        </p>
        <p dir="ltr">
          <span>
            I can only show to the path and let you know the door is now open
            for you…
          </span>
        </p>
        <p dir="ltr">
          <span>The person who can make the decision… is you.</span>
        </p>
        <p dir="ltr">
          <span>
            And if you choose to walk through this door to receive this Cosmic
            Invocation…
          </span>
        </p>

        <h2 id="lh">
          <span>
            All You Have To Do Is Follow Your Intuition Then You Can Have The
            “Cosmic Invocation”
          </span>
        </h2>
        <p dir="ltr">
          <span>Just follow your gut feeling…</span>
        </p>
        <p dir="ltr">
          <span>Listen to what it is telling you…</span>
        </p>
        <p dir="ltr">
          <span>And understand the door is now open for you only…</span>
        </p>
        <p dir="ltr">
          <span>
            Behind the door, you can manifest everything you want instantly…
          </span>
        </p>
        <p dir="ltr">
          <span>…your wealth, health and family…</span>
        </p>
        <p dir="ltr">
          <span>…your money, peace and marriage…</span>
        </p>
        <p dir="ltr">
          <span>…your dream, happiness and divinity…</span>
        </p>
        <p dir="ltr">
          <span>Your destinied calling is here…</span>
        </p>
        <p dir="ltr">
          <span>The price for Cosmic Invocation today is only $97…</span>
        </p>
        <p dir="ltr">
          <span>And your calling is await you to choose.</span>
        </p>

        <h2 id="lh">
          <span>Congratulations Your Calling Has Arrived!</span>
        </h2>
        <p
          dir="ltr"
          style={{
            textAlign: "center",
            fontFamily: "Poppins",
            fontWeight: "600",
            marginBottom: "40px",
          }}
        >
          <span>
            Cosmic Invocation Is Only Open On This Very Page -- Follow Your
            Intuition To Choose Your Path Below
          </span>
        </p>
        <div className="row">
          <div className="col">
            <div id="top-bar">
              <p id="top-line">
                NEVER ABLE TO MANIFEST WHAT YOU DESERVE INSTANTLY
              </p>
            </div>
            <Image id="f-img" src={a} width="500" height="500" />
            <p id="f-h1">The Hard Way</p>
            <div id="for the button" style={{ textAlign: "center" }}>
              <button
                id="f-d-bt"
                onClick={handleDeclineOrderClick}
                style={{ width: "100%", fontSize: "22px", lineHeight: "40px" }}
              >
                Click Here To Decline This Cosmic Offer
              </button>
            </div>
            <p id="f-h2">Missing out on this means...</p>

            <ul id="bullet-d">
              <li>- Never able to manifest your wish fast...</li>
              <li>
                - Lose the opportunity to receive the best favor from your
                cosmic destiny...
              </li>
              <li>- Have to wait for your manifestation all the time...</li>
            </ul>
          </div>
          <div className="col">
            <div id="top-bar">
              <p id="top-line">
                MANIFEST ANYTHING YOU DESERVE AS FAST AS POSSIBLE
              </p>
            </div>

            <Image id="f-img" src={b} width="500" height="500" />
            <div>
              <p id="f-h1y">The Easy Way</p>
              <p id="f-h11">($97 One Time Only)</p>
            </div>
            <div id="for the button" style={{ textAlign: "center" }}>
              <button
                id="f-a-bt"
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "800",
                  letterSpacing: "0.5px",
                }}
                onClick={handleOrderClick}
              >
                Order Now!
              </button>
            </div>
            <p id="f-h2">Completing this means...</p>
            <ul id="bullet-a">
              <li>- Manifest anything you want fast</li>
              <li>- Receive the best favor from your cosmic destiny</li>
              <li>- Receive all the miracles happen in your life fast</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="bottom">
        <footer>
          <p dir="ltr">
            <span>
              Results from our programs, methods, content and advice are not
              typical and your results may vary. Results are not guaranteed, and
              any claims made are for entertainment and educational purposes
              only. Results will vary based on individuals, how much effort is
              put forward, how long a person uses our methods for, and various
              other factors. Our customers results (shared on our sales pages,
              blog posts, emails etc), are based on the average of a sample set
              of course customers. The results may vary from person to person.
            </span>
          </p>
          <p id="ltr">
            <span>
              ClickBank is the retailer of products on this site. CLICKBANK® is
              a registered trademark of Click Sales Inc., a Delaware corporation
              located at 1444 S. Entertainment Ave., Suite 410 Boise, ID 83709,
              USA and used by permission. ClickBank’s role as retailer does not
              constitute an endorsement, approval or review of these products or
              any claim, statement or opinion used in promotion of these
              products.
            </span>
          </p>
          <p dir="ltr">
            <span>Terms and Conditions | Privacy Policy</span>
          </p>
          <p dir="ltr">
            <span>
              Copyright © Divine Astrology Reading - All Rights Reserved
            </span>
          </p>
        </footer>
      </div>
    </main>
  );
}
