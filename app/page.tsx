"use client"
import Image from "next/image";
import BxButton from "./components/BxButton/BxButton";
import TestForm from "./components/testForm/testForm";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans dark:bg-black">
      <main className="flex container mx-auto border-1 my-4 p-4 min-h-screen w-full max-w-4xl flex-row items-center justify-between py-32 px-16 sm:items-start">
        <TestForm /> 
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row"
         style={{display: "flex", alignItems: "center", gap: "16px"}}>
          <BxButton
            icon="plus"
            className="whitespace-nowrap"
            data-testid={"add-client-button"}
            variant={"primary"}
            handleClick={() => {console.log('ayooo')}}
            onClick={(e) => {console.log('on click', e)}}
            disabled
          >
            asdf movie
          </BxButton>

         <BxButton 
          className="whitespace-nowrap" 
           data-testid={'add-client-button'}>
          Add Client 
          </BxButton>

          <BxButton
            className="whitespace-nowrap"
            variant={"tertiary"}
            size='sm'
            disabled={true}
          >
            small
          </BxButton>


        <BxButton
            className="whitespace-nowrap"
            variant={"danger"}
            size={'lg'}
            
          >
            big
          </BxButton>

          <BxButton
            className="whitespace-nowrap"
            variant={"danger"}
            size={'sm'}
            form={'asdfmovie'}
            type={"reset"}
            
          >
            form reset
          </BxButton>

            <BxButton 
            icon="book"
             href={"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"}
              target="_blank"
              rel="noopener noreferrer">
                Documentation
            </BxButton>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>


        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <BxButton variant="primary" size={'sm'}>Primary</BxButton>
          <BxButton variant="secondary" size={'md'}>Secondary</BxButton>
          <BxButton variant="tertiary" size={'lg'}>Tertiary</BxButton>
          <BxButton variant="danger" size={'md'} loading='true'>Danger</BxButton>
          <BxButton 
          variant="secondary" 
          icon={'plus'}>
            Add Employee
         </BxButton>
        </div>
      </main>
    </div>
  );
}
