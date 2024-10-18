import ImageViewer from "./_components/ImageViewer";
import ItemDetail from "./_components/ItemDetail";
import MoreProduct from "./_components/MoreProduct";

export default function ProductDetail() {
  
  return (
    <div className="grid grid-cols-6 pl-[60px] border-t border-gray-200">
      <div className="col-span-2">
        <ImageViewer/>
      </div>

      <div className="col-span-4">
        <ItemDetail/>
      </div>
      <div className='col-span-6'>
        <div>
            <MoreProduct/>
        </div>
      </div>
    </div>
  );
}
