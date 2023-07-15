import React from "react";
import Link from "next/link";
import { textVariant2, slideIn, zoom } from "../util/motion";
import { motion } from "framer-motion";

const CommonQ2 = () => {
  return (
    <div className="my-1 py-8 px-2  mx-1 leading-loose bg-gradient-to-r from-white via-teal-100/70 to-green-100/70 text-black">
      <motion.h1
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="text-4xl font-semibold text-center my-4"
      >
        Quarter 2
      </motion.h1>
      <motion.h2
        variants={slideIn("left", "spring", 0.9, 2)}
        initial="hidden"
        whileInView="show"
        className="mb-4  font-semibold lg:text-2xl md:text-2xl text-lg
 text-teal-800  underline underline-offset-4"
      >
        CW2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and
        APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform
      </motion.h2>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <h1 className="font-bold lg:text-5xl md:text-5xl text-2xl mt-4">
          Course Description:
        </h1>
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal my-4"
        >
          The objective of this course is to teach participants to develop
          customer-facing planet-scale Websites, Full-Stack Apps and templates,
          Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter,
          the participants will be able to develop and deploy web platforms like
          Facebook, Shopify, etc. The technologies covered in this course will
          include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL,
          Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless
          Technologies, and Cloud Development Kit for Terraform (CDKTF).
        </p>
      </motion.div>
      <motion.div
        variants={zoom("up", "bounce")}
        initial="hidden"
        whileInView="show"
        className="mt-8  border-teal-700 rounded-xl border-2 flex lg:flex-row md:flex-row flex-col lg:w-2/4 w-full "
      >
        <div className="lg:w-2/4 md:w-2/4 w-full font-bold text-3xl  text-teal-900 lg:h-40 lg:py-12 lg:px-8 md:h-40 md:py-14 md:px-8 px-6 py-6">
          <h1>Core Track</h1>
          <p className="lg:text-base md:text-lg text-base font-medium text-teal-600">
            (Common in All Specializations)
          </p>
        </div>
        <div className="bg-gradient-to-r from-teal-800/70 to-green-500/70 md:w-2/4 lg:w-2/4 w-full text-white font-semibold text-2xl md:py-10 lg:px-12 lg:py-10 md:px-12 px-6 py-6">
          <h1>Duration</h1>
          <h3 className="lg:my-2 md:my-2 ">13 Weeks</h3>
        </div>
      </motion.div>
      <motion.h1
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="font-bold text-5xl mt-4"
      >
        Course Outline:
      </motion.h1>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <h2
          className="lg:text-2xl md:text-2xl text-xl
 font-bold mb-2 mt-4"
        >
          Next.js 13 Web Development
        </h2>
        <Link
          className="lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2"
          href="https://beta.nextjs.org/docs"
          target={"_blank"}
        >
          Next 13 Official Documentation
        </Link>
        <div className="lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2">
          <Link href="https://react.dev/learn" target={"_blank"}>
            Latest Learn React Official Website
          </Link>
        </div>
        <div className="lg:text-lg md:text-lg text-base font-normal text-blue-600 underline underline-offset-2 my-2">
          <Link
            href="https://github.com/panaverse/learn-nextjs"
            target={"_blank"}
          >
            Learn Next.js 13 Learning Repo
          </Link>
        </div>
      </motion.div>
      <div>
        <motion.div variants={textVariant2} initial="hidden" whileInView="show">
          <h2
            className="lg:text-2xl md:text-2xl text-xl
font-bold mb-2 mt-4"
          >
            Next.js 13 using Chakra UI (Remote Zoom Class)
          </h2>
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
            href="https://www.freecodecamp.org/news/css-flexbox-complete-guide/"
            target={"_blank"}
          >
            CSS Flexbox Explained – Complete Guide to Flexible Containers and
            Flex Items
          </Link>
          <div
            className="block lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
          >
            <Link
              href="https://chakra-ui.com/getting-started"
              target={"_blank"}
            >
              Chakra UI Docs
            </Link>
          </div>
        </motion.div>
        <motion.div variants={textVariant2} initial="hidden" whileInView="show">
          <h2
            className="lg:text-2xl md:text-2xl text-xl
font-bold mb-2 mt-4"
          >
            UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote Zoom
            Class)
          </h2>
          <p
            className="lg:text-lg md:text-lg text-base
 font-normal no-underline"
          >
            Designing and Prototyping Interfaces with Figma: Learn essential
            UX/UI design principles by creating interactive prototypes for
            mobile, tablet, and desktop by Fabio Staiano
          </p>
          <Link
            href="https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa"
            target={"_blank"}
            className="block lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
          >
            https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa
          </Link>
          <Link
            href="https://www.figma.com/community/file/768809027799962739"
            target={"_blank"}
            className="block lg:text-lg md:text-lg text-base
font-normal text-blue-600 underline underline-offset-2 my-2"
          >
            Figma Design Kit for TailwindCSS
          </Link>
          <Link
            href="https://www.figma.com/community/file/971408767069651759/Chakra-UI-Figma-Kit"
            target={"_blank"}
            className="block lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
          >
            Chakra UI Figma Kit
          </Link>
        </motion.div>
      </div>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <div>
          <h2
            className="text-lg:text-2xl md:text-2xl text-xl
 font-bold mb-2 mt-4"
          >
            API Routes with Next.js (Remote Zoom Class)
          </h2>
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
            href="https://nextjs.org/docs/api-routes/introduction"
            target={"_blank"}
          >
            API Routes
          </Link>
        </div>

        <h2
          className="lg:text-2xl md:text-2xl text-xl
 font-bold my-4"
        >
          APIs with Next.js and tRPC (Remote Zoom Class)
        </h2>
        <Link
          className="block lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
          href="https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/"
          target={"_blank"}
        >
          Build a tRPC CRUD API Example with Next.js
        </Link>
        <Link
          className="block lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
          href="https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/"
          target={"_blank"}
        >
          Stop building REST APIs for your Next.js apps, use tRPC instead
        </Link>
      </motion.div>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <h2
          className="lg:text-2xl md:text-2xl text-xl
 font-bold my-4"
        >
          SQL and Prisma
        </h2>
        <Link
          className="block lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
          href="https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres"
          target={"_blank"}
        >
          Start from scratch with relational databases
        </Link>
        <Link
          className="block lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
          href="https://www.youtube.com/watch?v=5hzZtqCNQKk"
          target={"_blank"}
        >
          SQL For Beginners Video Tutorial
        </Link>
        <Link
          className="block lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
          href="https://www.freecodecamp.org/news/dbms-and-sql-basics/"
          target={"_blank"}
        >
          Database Management Systems and SQL – Tutorial for Beginners
        </Link>

        <h2
          className="lg:text-2xl md:text-2xl text-xl
 font-bold my-4"
        >
          Next.js 13 using TailwindCSS (Remote Zoom Class)
        </h2>
        <Link
          className="block lg:text-lg md:text-lg text-base
font-normal text-blue-600 underline underline-offset-2 my-2"
          href="https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/"
          target={"_blank"}
        >
          Modern CSS with Tailwind, Second Edition by Noel Rappin
        </Link>
      </motion.div>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <h2
          className="lg:text-2xl md:text-2xl text-xl
 font-bold my-4"
        >
          AWS Application Composer (Remote Zoom Class)
        </h2>
        <Link
          className="block lg:text-lg md:text-lg text-base
font-normal text-blue-600 underline underline-offset-2 my-2"
          href="https://www.youtube.com/watch?v=BujE_tik5r8"
          target={"_blank"}
        >
          What is AWS Application Composer?
        </Link>
        <Link
          className="block lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
          href="https://www.youtube.com/watch?v=p411uh363jQ"
          target={"_blank"}
        >
          Event-driven apps with AWS Application Composer
        </Link>
        <Link
          className="block lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
          href="https://aws.amazon.com/application-composer/"
          target={"_blank"}
        >
          Visually design and build serverless applications quickly
        </Link>
      </motion.div>
      <motion.h2
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-xl md:text-xl text-lg
 font-semibold"
      >
        Must Have: Create Free AWS Account
      </motion.h2>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <Link
          className="block lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
          href="https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all"
          target={"_blank"}
        >
          AWS Free Tier
        </Link>

        <p
          className="lg:text-lg md:text-lg text-base
 font-medium"
        >
          Note: For AWS Free Tier you will need a credit or debit card. The
          easiest way for Pakistani students is to open a bank account with
          Meezan Bank. Open a Meezan Aasan Account if you have no earning proof.
          Meezan Bank will charge Rs. 1100 for ATM Debit Card and there is a
          requirement of Rs. 100 minimum deposit. The card will be delivered in
          a few weeks. Our students have reported that this Debit card works
          with AWS.
        </p>
      </motion.div>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <p
          className="lg:text-lg md:text-lg text-base
 font-normal my-4"
        >
          Now you can create a virtual VISA Debit card through the
          <Link
            className="lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
            href="https://www.nayapay.com/"
            target={"_blank"}
          >
            NayaPay app
          </Link>
          which can be used to create AWS/GCP/Azure accounts. This is good news
          for those students who find it difficult to create physical debit and
          credit cards from banks.
        </p>
      </motion.div>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <h2
          className="lg:text-xl md:text-xl text-lg
 font-semibold"
        >
          You can also get a $300 credit
        </h2>
        <Link
          className="block lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
          href="https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html"
          target={"_blank"}
        >
          https://pages.awscloud.com/adoptf90d_
          <br className="md:hidden" />
          GLOBAL_POC-credits.html
        </Link>
      </motion.div>

      <motion.h1
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-3xl md:text-3xl text-xl
 font-semibold my-4"
      >
        Multi-Cloud GraphQL Serverless API Development with Cloud Development
        Kit for Terraform (CDKTF) (Remote Zoom Class)
      </motion.h1>
      <motion.div variants={textVariant2} initial="hidden" whileInView="show">
        <Link
          className="block lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
          href="https://github.com/panaverse/learn-multicloud-api-development"
          target={"_blank"}
        >
          Learn Multicloud Serverless API Development using CDK Terraform in
          Baby Steps
        </Link>
      </motion.div>
      <motion.h1
        variants={slideIn("left", "spring", 0.5, 1.5)}
        initial="hidden"
        whileInView="show"
        className="lg:text-3xl md:text-3xl text-xl
 font-semibold my-4"
      >
        Web 2.0 Projects
      </motion.h1>
      <ol className="list-disc list-inside md:mx-8 lg:mx-8 mx-4 my-2">
        <motion.li
          variants={slideIn("left", "spring", 0.5, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          <Link
            className=" lg:text-lg md:text-lg text-base
font-normal text-blue-600 underline underline-offset-2 my-2"
            href="https://github.com/panaverse/nextjs-projects"
            target={"_blank"}
          >
            Next.js Projects
          </Link>
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 0.7, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          <Link
            className=" lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
            href="https://github.com/panaverse/styling-nextjs-projects"
            target={"_blank"}
          >
            Styling Next.js Projects using{" "}
            <span className={"mx-6 lg:mx-0 md:mx-0 "}>
              TailwindCSS and Chakra UI
            </span>
          </Link>
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 0.9, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          <Link
            className=" lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
            href="https://github.com/ogzhanolguncu/min-todo"
            target={"_blank"}
          >
            Todo Full-Stack App
          </Link>
        </motion.li>
        <motion.li
          variants={slideIn("left", "spring", 1.2, 1.5)}
          initial="hidden"
          whileInView="show"
        >
          <Link
            className=" lg:text-lg md:text-lg text-base
 font-normal text-blue-600 underline underline-offset-2 my-2"
            href="https://www.youtube.com/watch?v=nzJsYJPCc80"
            target={"_blank"}
          >
            Build a Twitter Clone
          </Link>
        </motion.li>
      </ol>
    </div>
  );
};

export default CommonQ2;
