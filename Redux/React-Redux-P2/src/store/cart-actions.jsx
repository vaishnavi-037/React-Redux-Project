import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/posts");
      if (!response.ok) {
        throw new Error("Could not fetch cart data!!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();

      // real code as i don't have backend I'm commenting it
    //   dispatch(
    //     cartActions.replaceCart({
    //       items: cartData.items || [],
    //       totalQuantity: cartData.totalQuantity || 0,
    //     })
    //   );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!!",
          message: "Fetching cart Data Failed!!",
        })
      );
    }
  };
};
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!!",
      })
    );

    const sendRequest = async () => {
      //return a function
      const response = await fetch("https://dummyjson.com/posts/1", {
        method: "PUT",
        body: JSON.stringify({
          title: "I think I should shift to the moon",
        }),
      });

      // const response = await fetch("put api", {
      //   method: "PUT" /* or PATCH */,
      //   body: JSON.stringify({items: cart.items, totalQuantity: cart.totalQuantity}),
      // });

      if (!response.ok) {
        throw new Error("Sending cart data Failed!!");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!!",
          message: "Sent cart data successfully!!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!!",
          message: "Sending cart Data Failed!!",
        })
      );
    }
  };
};
