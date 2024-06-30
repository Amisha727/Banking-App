import HeaderBox from '@/components/HeaderBox';
import PaymentTransferForm from '@/components/PaymentTransferForm';
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Transfer = async () => {
  try {
    const loggedIn = await getLoggedInUser();

    if (!loggedIn) {
      // If the user is not logged in, redirect to the sign-in page
      if (typeof window !== "undefined") {
        window.location.href = '/sign-in';
      }
      return null;
    }

    const accounts = await getAccounts({ userId: loggedIn.$id });

    if (!accounts || accounts.data.length === 0) return null;

    const accountsData = accounts.data;

    return (
      <section className="payment-transfer">
        <HeaderBox 
          title="Payment Transfer"
          subtext="Please provide any specific details or notes related to the payment transfer"
        />

        <section className="size-full pt-5">
          <PaymentTransferForm accounts={accountsData} />
        </section>
      </section>
    );
  } catch (error) {
    console.error("Error in Transfer component:", error);
    if (typeof window !== "undefined") {
      window.location.href = '/sign-in';
    }
    return null;
  }
}

export default Transfer;
