export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between pt-24 pb-20 px-24">
      <div className="my-10">
        <div className=" font-bold text-8xl tracking-tighter">
          <span>Hi! I&apos;m</span>
          <h1 className="">Iren Liber</h1>
        </div>
        <p className="text-xl my-7 font-light text-gray-700">
          Web developer, traveller and mom
        </p>
      </div>
      <div>
        <ul className="text-xl font-light text-gray-700">
          <li className="flex">
            <span className="mr-3">👩‍💻</span>
            8+ years of experience
          </li>
          <li className="flex">
            <span className="mr-3">💙</span>
            Ruby on Rails, React.js
          </li>
          <li className="flex">
            <span className="mr-3">🏠</span>
            Turkey
          </li>
        </ul>
        <div className="mt-12">
          <a className="underline underline-offset-4">Download my CV</a>
        </div>
      </div>

      <div className="mt-20">
        <div>Contact me:</div>
        <ul className="flex flex-shrink-0 flex-wrap max-w-full mr-6">
          <li className="mr-5 mt-2 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
            <a target="_blank" href="mailto:irr.morgo@gmail.com" >irr.morgo@gmail.com</a>
          </li>
          <li className="mr-5 mt-2">
            <a target="_blank" href="https://t.me/IrinaLiber" >Telegram</a>
          </li>
          <li className="mr-5 mt-2">
            LinkedIn
          </li>
        </ul>
      </div>
    </main>
  )
}
