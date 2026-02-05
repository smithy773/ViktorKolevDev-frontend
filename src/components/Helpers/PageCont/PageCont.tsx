// TITLE:
// CHANGE TYPES
// MAKE TITLE INTO IMAGE
// DESCRIPTION!!!

function PageCont(props: any) {
  return (
    <div className="overflow-hidden max-w-full max-h-full w-full h-full">
      <div className="w-full h-full overflow-y-scroll box-content pr-5">
        <section>
          {props.title == "none" ? (
            ""
          ) : (
            <h1 className="text-5xl mb-10">{props.title}</h1>
          )}
          {props.description == "none" ? "" : <p>{props.description}</p>}
        </section>
        <section className="my-10">{props.children}</section>
      </div>
    </div>
  );
}

export default PageCont;
