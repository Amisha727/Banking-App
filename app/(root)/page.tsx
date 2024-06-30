import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar"
import TotalBalanceBox from "@/components/TotalBalanceBox"

const Home = () => {
  const loggedIn = {firstName: 'Amisha', lastName: 'Jha', email: 'contact@stellar.com'}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type="greeting" 
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext = 'Access and manage your account and transaction efficiently'
          />
          <TotalBalanceBox 
          accounts = {[]}
          totalBanks= {1}
          totalCurrentBalance={13250.76}
          />

        </header>
        RECENT TRANSACTIONS 
      </div>
      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 123500}, {currentBalance: 500.50}]}
      />
      </section>
  )
}

export default Home
