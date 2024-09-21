import Image from "next/image";

const Technologies = () => {
  return (
    <section
      id="features"
      className="container mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-12 lg:py-20"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-[1.1] ">
          Technologies we teach
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          At our institute, we stay up-to-date with the latest advancements in
          web development, ensuring our students receive comprehensive training
          on the most in-demand technologies. Our curriculum includes:
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <div className="hover: overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <div className="h-14 w-14">
              <Image src={"/assets/icons/html.png"} width={512} height={512} />
            </div>
            <div className="">
              <h3 className="font-bold">HTML 5</h3>
              <p className="text-sm text-muted-foreground">
                Basic to advance HTML
              </p>
            </div>
          </div>
        </div>
        <div className="hover:transition-transform overflow-hidden  rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <div className="h-14 w-14">
              <Image src={"/assets/icons/css.png"} width={512} height={512} />
            </div>
            <div className="">
              <h3 className="font-bold">CSS 3</h3>
              <p className="text-sm text-muted-foreground">
                Basic to advance CSS
              </p>
            </div>
          </div>
        </div>
        <div className="hover:transform overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <div className="h-14 w-14">
              <Image src={"/assets/icons/js.png"} width={512} height={512} />
            </div>
            <div className="">
              <h3 className="font-bold">JavaScript</h3>
              <p className="text-sm text-muted-foreground">
                Modern ES6 JavaScript
              </p>
            </div>
          </div>
        </div>
        <div className="hover:transform overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <div className="h-14 w-14">
              <Image src={"/assets/icons/node.png"} width={512} height={512} />
            </div>
            <div className="">
              <h3 className="font-bold"> Node.js</h3>
              <p className="text-sm text-muted-foreground">
                Node.js and its frameworks like express.js for backend
                development
              </p>
            </div>
          </div>
        </div>
        <div className="hover:transform overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <div className="h-14 w-14">
              <Image src={"/assets/icons/db.png"} width={512} height={512} />
            </div>
            <div className="">
              <h3 className="font-bold">Database</h3>
              <p className="text-sm text-muted-foreground">
                MongoDB as a database
              </p>
            </div>
          </div>
        </div>
        <div className="hover:transform overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <div className="h-14 w-14">
              <Image src={"/assets/icons/api.png"} width={512} height={512} />
            </div>
            <div className="">
              <h3 className="font-bold">API development</h3>
              <p className="text-sm text-muted-foreground">
                Rest api development to build modern fullstack applications
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
