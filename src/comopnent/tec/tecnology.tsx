import {
  use,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

import type { ITechnology } from "./type";
import YourStackFull from "./yourstackfull";

interface Props {
  technologyPromise: Promise<ITechnology[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const Technology = ({
  technologyPromise,
  coin,
  setCoin,
}: Props) => {
  const technology = use(technologyPromise);

  const [selectedIds, setSelectedIds] = useState<
    Set<string | number>
  >(new Set());

  const [selectecnology, setselectedtecnology] =
    useState<ITechnology[]>([]);


  const toggleSelect = (id: string | number) => {
    const isCurrentlySelected = selectedIds.has(id);


    setSelectedIds((prev) => {
      const next = new Set(prev);

      if (isCurrentlySelected) {
        next.delete(id);
      } else {
        next.add(id);
      }

      return next;
    });
    setCoin((prevCoin) =>
      isCurrentlySelected
        ? prevCoin - 1
        : prevCoin + 1
    );

    
    const selectedTechnology = technology.find(
      (item) => item.id === id
    );

    if (!selectedTechnology) return;

    // Technology update
    setselectedtecnology((prev) => {
      if (isCurrentlySelected) {
        return prev.filter(
          (item) => item.id !== id
        );
      }

      return [...prev, selectedTechnology];
    });
  };


  const handleRemove = (id: string | number) => {
    
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
    // Remove technology
    setselectedtecnology((prev) =>
      prev.filter((item) => item.id !== id)
    );
    // Coin -1
    setCoin((prevCoin) => prevCoin - 1);
  };
  const handleRemoveAll=()=>{
    setSelectedIds(new Set());
    setselectedtecnology([]);
    setCoin(0);

  }

  return (
    <div className="flex gap-6 items-start">
      <div className="flex-1">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {technology.map((item) => {
            const isSelected = selectedIds.has(item.id);

            return (
              <div key={item.id}>

            
                <div className="card bg-base-100 shadow-sm w-full">

                  <div className="card-body">

                  
                    <div className="flex items-center justify-between">

                      {item.icon && (
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-6 h-6 object-cover"
                        />
                      )}

                      {item.badge && (
                        <span className="badge badge-secondary">
                          {item.badge}
                        </span>
                      )}

                    </div>

                    
                    <h2 className="card-title mt-2">
                      {item.name}
                    </h2>

                
                    <p>
                      {item.description}
                    </p>

                  
                    <div className="card-actions justify-between text-sm text-base-content/70 mt-4">

                      <span>
                        {item.category}
                      </span>

                      <span>
                        {item.difficulty}
                      </span>

                      <span>
                         {item.rating}
                      </span>

                    </div>

                  
                    <button
                      type="button"
                      onClick={() =>
                        toggleSelect(item.id)
                      }
                      className={`btn mt-4 ${
                        isSelected
                          ? "btn-success"
                          : "btn-neutral"
                      }`}
                    >
                      {isSelected
                        ? "Selected"
                        : "Add to stock"}
                    </button>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>


  
      <div className="w-72 shrink-0">

        <YourStackFull
          coin={coin}
          technology={selectecnology}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />

      </div>

    </div>
  );
};

export default Technology;