const GalleryItem = ({ item }) => {
  return (
    <div
      className="flex relative"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      <img
        src={item.media}
        alt=""
        className="rounded-xl object-cover w-full"
      />
    </div>
  );
};

export default GalleryItem;