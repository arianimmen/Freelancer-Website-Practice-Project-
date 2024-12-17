const colors = {
  primary: "bg-primary-100 text-primary-700",
  green: "bg-green-100 text-green-700",
  orange: "bg-yellow-100 text-yellow-700",
};

function Stat({ icon, value, title, color }) {
  return (
    <div className="flex flex-wrap items-center flex-col md:flex-row  bg-secondary-200 p-4 rounded-lg gap-x-4 justify-center md:justify-start">
      <div
        className={`row-span-2 flex items-center justify-center p-2 aspect-square rounded-full 
      ${colors[color]}`}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-y-2 items-center md:items-start">
        <h5 className="font=bold text-secondary-500 text-lg self-center ">
          {title}
        </h5>
        <p className="text-3xl font-bold text-secondary-900">{value}</p>
      </div>
    </div>
  );
}

export default Stat;
