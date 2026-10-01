import type { ITechnology } from "./type";

interface Props {
  coin: number;
  technology: ITechnology[];
  onRemove: (id: string | number) => void;
  onRemoveAll: () => void;
}

const YourStackFull = ({ coin, technology, onRemove, onRemoveAll }: Props) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        
        <div className="flex justify-between items-center">
          <h2 className="card-title">Your Stack</h2>
          
        </div>

        <h4 className="text-sm font-medium text-gray-600">
          {coin} Tecnology Selected 
        </h4>

        
        <div className="mt-4">
          {coin === 0 ? (
            <p className="text-gray-500 text-center py-4">Your stack is empty</p>
          ) : (
            <div className="flex flex-col gap-3">
              {technology.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border rounded-lg p-3"
                >
            
                  <div className="flex items-center gap-3">
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-8 h-8 object-cover rounded"
                      />
                    )}

                    <div>
                      <h3 className="font-semibold text-sm">{item.name}</h3>
                      <p className="text-xs text-gray-500">{item.category}</p>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    type="button"
                    onClick={() => onRemove(item.id)}
                    className="btn btn-error btn-xs btn-outline"
                    aria-label={`Remove ${item.name}`}
                  >
                    ✕
                  </button>
                </div>
              ))}

              {/* Clear All Button */}
              <div className="flex justify-end mt-2">
                <button
                  type="button"
                  onClick={onRemoveAll}
                  
                  className="btn btn-error btn-sm btn-outline"
                >
                  Remove All
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default YourStackFull;