import { SectionProps } from "./interfaces";

const Section = ({ name }: SectionProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">Dane analityczne...</p>
    </div>
  );
};
export { Section };
