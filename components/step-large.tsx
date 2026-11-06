// @ts-nocheck
export default function StepLarge({ number, title }) {
  return (
    <div className="step flex items-center py-4">
      <div className="flex items-center justify-center border border-gray-200 font-extrabold rounded-full h-8 w-8 text-green-500">
        {number}
      </div>
      <h2 className="ml-3 tracking-tight font-bold">{title}</h2>
    </div>
  );
}
