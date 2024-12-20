interface CardProps {
    title: string;
    value: string | number;
  }
  
  const Card: React.FC<CardProps> = ({ title, value }) => (
    <div className="bg-white shadow rounded-lg p-6 text-center">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
  
  export default Card;
  