function Background() {
  return (
    <div className="fixed z-[2] h-screen w-full">
      <div className="absolute top-[5%] flex w-full justify-center text-xl leading-none tracking-tighter text-zinc-600">
        Documents.
      </div>
      <h1 className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-9xl font-semibold leading-none tracking-tight text-zinc-900">
        Docs.
      </h1>
    </div>
  );
}

export default Background;
