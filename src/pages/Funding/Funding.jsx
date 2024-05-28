import Heading from "../../components/Shared/Heading";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import Container from "../../components/Shared/Container";
import PaymentModal from "../../components/Shared/Modal/PaymentModal";
import { useQuery } from "@tanstack/react-query";
import { getPaymentsData } from "../../api/payment";
import FundTable from "../../components/FundTable/FundTable";

const Funding = () => {
  const { user } = useAuth();
  const [paymentInfo, setPaymentInfo] = useState({});
  const [amount, setAmount] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { data: payments = [], refetch: refetchPayments } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const data = getPaymentsData(user?.email);
      return data;
    },
  });

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleAmount = (event) => {
    const price = event.target.value;

    console.log(price);
    setAmount(price);
  };
  useEffect(() => {
    if (user) {
      setPaymentInfo({
        name: user?.displayName,
        email: user?.email,
        amount: amount,
      });
    }
  }, [user, amount]);

  const openModal = (event) => {
    event.preventDefault();
    if (amount) {
      setIsOpen(true);
    }
  };

  //   console.log(userInfo);
  return (
    <Container>
      <div className="px-16">
        <div className="my-12">
          <Heading
            center={true}
            title={"Help us to grow our organization !!!"}
          />
        </div>
        <div className=" mx-auto mt-10 w-full px-4 md:px-0 md:max-w-screen-md">
          <div className="flex flex-col md:flex-row items-center w-full">
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-0 md:gap-5 ">
              <div className="w-full">
                <label htmlFor="money" className="block mb-2 text-sm">
                  Amount
                </label>
                <input
                  type="number"
                  name="amount"
                  onChange={handleAmount}
                  required
                  placeholder={"Type Number $"}
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
            </div>
          </div>
          <div className=" my-4">
            <button
              disabled={!amount}
              onClick={openModal}
              className="btn  bg-rose-500 w-full rounded-md py-3 font-semibold text-white hover:bg-teal-700  flex justify-center items-center"
            >
              Next
            </button>
          </div>
        </div>
        {/* table */}
        <div className="w-full md:max-w-screen-md pt-10 mx-auto">
          <FundTable payments={payments} />
        </div>
        {/* Payment Modal */}
        <PaymentModal
          isOpen={isOpen}
          closeModal={closeModal}
          paymentInfo={paymentInfo}
          setIsOpen={setIsOpen}
          refetchPayments={refetchPayments}
        />
      </div>
    </Container>
  );
};

export default Funding;
