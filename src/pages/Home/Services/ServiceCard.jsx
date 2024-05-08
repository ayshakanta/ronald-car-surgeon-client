const ServiceCard = ({ service }) => {
  const { price, title, img } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions">
          <p className="text-xl font-bold text-orange-600">Price: ${price}</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
