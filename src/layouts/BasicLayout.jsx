const BasicLayout = ({children}) => {
  return (
    <div>
      <header className="bg-teal-400 p-5">
        <h1 className="text-2xl text-center">Whose Taste</h1>
      </header>
      <h1 className="text-2xl md:text-4xl">{children}</h1>
    </div>
  );
};

export default BasicLayout;
