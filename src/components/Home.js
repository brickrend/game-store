import { Title, ShopImage } from "../styles";
const HomePage = () => {
  return (
    <div>
      <Title className="text">Game Store</Title>
      <Title className="text">Made by gamers for gamers</Title>
      <ShopImage
        id="image-s"
        src="https://tessla.org/wp-content/uploads/2017/06/db3c6932ab7f48aa37911fa229efa7ba-2.jpg"
        alt="Imgae"
      />
    </div>
  );
};

export default HomePage;
