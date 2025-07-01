import "./turfRoute.css";
import { BookingTurf, SlotCard, TurfCard, ViewTurf } from "../feature/index";
import { turfList } from "../store";
import { useState } from "react";
import { Modal } from "../components";
const TurfRoute = () => {
  const [isViewTurf, setViewTurf] = useState(false);
  const [selectedTurf, setSelectedTurf] = useState();
  const [isBookTurf, setisBookTurf] = useState(false);
  const handleOnMouseEnter = (data) => {
    setViewTurf(true);
    setSelectedTurf(data);
  };
  return (
    <div id="turf-route-container">
      {isViewTurf || isBookTurf ? (
        <Modal
          content={
            isBookTurf ? (
              <BookingTurf turfDetail={selectedTurf} />
            ) : (
              <ViewTurf
                bookNow={() => {
                  setViewTurf(false);
                  setisBookTurf(true);
                }}
                props={selectedTurf}
              />
            )
          }
          onClose={() => {
            setViewTurf(false);
            setisBookTurf(false);
          }}
        />
      ) : null}
      {/* <SlotCard /> */}
      <div id="turf-card-container">
        {turfList.map((item) => {
          return (
            <TurfCard
              onCustomEvent={() => handleOnMouseEnter(item)}
              props={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TurfRoute;
