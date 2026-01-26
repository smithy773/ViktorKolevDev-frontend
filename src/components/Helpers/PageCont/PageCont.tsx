function PageCont(props: any) {
  return (
    <div className="overflow-hidden w-full h-full">
      <div className="w-full h-full overflow-y-scroll box-content pr-5">
        {props.children}
      </div>
    </div>
  );
}

export default PageCont;
