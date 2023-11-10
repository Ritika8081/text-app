import React from 'react';
import Button from './Button'; // Make sure to import your Button component properly

const DiscountCard = () => {
  const mainContainer = {
    display: 'flex',
    justifyContent: 'space-around', // Adjust the spacing between rows as needed
  };

  const cardStyle = {
    border: '1px solid #000',
    margin:"2%",
    width: '13%', // Adjust the width for responsive cards and spacing
    height: '16rem',
    padding: '2%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: '2%',
  };

  const headingStyle = {
    color: 'green',
    fontSize: '20px',
  };

  const grayTextStyle = {
    color: 'lightgray',
    fontSize: '14px',
  };

  const whiteTextStyle = {
    color: 'white',
    backgroundColor: 'red', // Button background color is red
    padding: '2px', // Button padding is 2px
    fontSize: '15px',
  };

  return (
    <div className='main'>
      <div style={mainContainer}>
        <div style={cardStyle}>
          <h1 style={headingStyle}>Upto 60% off on Appliances</h1>
          <img
             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAMAAABCBMsOAAAAn1BMVEX///8AAAD6+vpTU1Pe3t65ubn///0eHh6IiIj39/f09PTx8fHJycmwsLCmpqapqamUlJR6enr+lADS0tLn5+fBwcEpKSlbW1sLCwv+kACAgIA7Oztvb28TExNDQ0M0NDRjY2P3w39KSkqenp77++r679r68+P337v9+O/4yJLylwD2hQD0t2fysVb3q1D77M/62bD4vXT50J31pDr1oSz3iRKbAAADN0lEQVR4nO2VC3OiMBCANxF5oyIPg4rPKr4qVvv/f9vtBmx7vbE3c2jnOrPfjBCyJPvBhgjAMAzDMAzDMAzDMAzDMAzDMAzDMAzD/GCi4Xg89KnlBwEYdhgAxHbYlTqaUDTSrU6X6NCF7IZh16XeIGjjDGHSzEGOhWaG7YUQAbXtmI4LzOK0qmgPo6OqKYYAhqVb5IMnX49pZNETwhoPaC6AllB6epXqJG2AUIhpSCYGwCC3LEsbeSi0mGHTIwul9fK4icVUP9JEPy6ms/y2FkhS6omnQkXgYJSqZBgx6qYxdIVouWRo63cxjbrVU/w7URsfGWw9I1p0AGa6rXtk1KbJB7ofoXol2rmLIzG/B1XPVL+5JhiBPbCuFjjXUOewq8WA0WErry1ilebY6aX6yQ3sjski1p6NLDx8scLKb1h4VP1U1RYDy5o6KJPqKtISNaBaHU0tMM3E98IPFuG7hcTZB5FbVQo6IhXRQyywuMIFuGHh69LX6wVvVbpIsloFhqgr0tyCvgg8pXobaKnaolNbBEK1XOmO9HuZ4Gc8mrSWXr1+cejCuY9FoveFZfXBL8hCkoWsLNoiVwlp5dPYULhbKNrNcJBKIw+/lCXcx8KpdsFpTluCrsi7hQ2xpTAgJiIXPhbAGsxwe03pFtRRYgJ3sgB/RJunXNIsszxPpBzmCveoXk4fZYJLwLLdXu6DMfY9x3G9YAzSGVo0yiMLK3dppGr2T+L5Pm7PQD/cHR3p4NHDbLhTOlLGFJUORfEEGAZw8WD4iQEe5jeM68hGFh+R15+U1JD64u1U9b11Yznl3TIzzE/C/EvwabV6+vqmxqyLL8PmZrvb77Ps8FiLzfOxpAzmjactt6ei2PaPD7XA5C/756Jq/hGs1ErTzF4eXBKAYrffbcsbWcrzbl+u9qcHO2D29byf9S/zYr35qGJuNuX80u9fVrDdbR5soUVWz31kdzlsz0VZrsqyOG0Px12WZa8nLMvl/HgJqj+s5q8ZmWRXqN0/FORYHr5Bogbf//G1/8bu+HKqK2Q+emX+jrkui/McOZ/K9eb781NC81POz9cMwzAMwzAMwzAMwzAMwzAMw/xP/AJOdTYQkodz5QAAAABJRU5ErkJggg=="
             alt="Appliance"
             style={{ width: '70%', height: '40%' }}
          />
          <p style={grayTextStyle}>Upto 60% off on summer Appliances</p>
          <Button style={whiteTextStyle}>GRAB NOW</Button>
        </div>
        <div style={cardStyle}>
          <h1 style={headingStyle}>Upto 60% off on Appliances</h1>
          <img
             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAMAAABCBMsOAAAAn1BMVEX///8AAAD6+vpTU1Pe3t65ubn///0eHh6IiIj39/f09PTx8fHJycmwsLCmpqapqamUlJR6enr+lADS0tLn5+fBwcEpKSlbW1sLCwv+kACAgIA7Oztvb28TExNDQ0M0NDRjY2P3w39KSkqenp77++r679r68+P337v9+O/4yJLylwD2hQD0t2fysVb3q1D77M/62bD4vXT50J31pDr1oSz3iRKbAAADN0lEQVR4nO2VC3OiMBCANxF5oyIPg4rPKr4qVvv/f9vtBmx7vbE3c2jnOrPfjBCyJPvBhgjAMAzDMAzDMAzDMAzDMAzDMAzDMAzD/GCi4Xg89KnlBwEYdhgAxHbYlTqaUDTSrU6X6NCF7IZh16XeIGjjDGHSzEGOhWaG7YUQAbXtmI4LzOK0qmgPo6OqKYYAhqVb5IMnX49pZNETwhoPaC6AllB6epXqJG2AUIhpSCYGwCC3LEsbeSi0mGHTIwul9fK4icVUP9JEPy6ms/y2FkhS6omnQkXgYJSqZBgx6qYxdIVouWRo63cxjbrVU/w7URsfGWw9I1p0AGa6rXtk1KbJB7ofoXol2rmLIzG/B1XPVL+5JhiBPbCuFjjXUOewq8WA0WErry1ilebY6aX6yQ3sjski1p6NLDx8scLKb1h4VP1U1RYDy5o6KJPqKtISNaBaHU0tMM3E98IPFuG7hcTZB5FbVQo6IhXRQyywuMIFuGHh69LX6wVvVbpIsloFhqgr0tyCvgg8pXobaKnaolNbBEK1XOmO9HuZ4Gc8mrSWXr1+cejCuY9FoveFZfXBL8hCkoWsLNoiVwlp5dPYULhbKNrNcJBKIw+/lCXcx8KpdsFpTluCrsi7hQ2xpTAgJiIXPhbAGsxwe03pFtRRYgJ3sgB/RJunXNIsszxPpBzmCveoXk4fZYJLwLLdXu6DMfY9x3G9YAzSGVo0yiMLK3dppGr2T+L5Pm7PQD/cHR3p4NHDbLhTOlLGFJUORfEEGAZw8WD4iQEe5jeM68hGFh+R15+U1JD64u1U9b11Yznl3TIzzE/C/EvwabV6+vqmxqyLL8PmZrvb77Ps8FiLzfOxpAzmjactt6ei2PaPD7XA5C/756Jq/hGs1ErTzF4eXBKAYrffbcsbWcrzbl+u9qcHO2D29byf9S/zYr35qGJuNuX80u9fVrDdbR5soUVWz31kdzlsz0VZrsqyOG0Px12WZa8nLMvl/HgJqj+s5q8ZmWRXqN0/FORYHr5Bogbf//G1/8bu+HKqK2Q+emX+jrkui/McOZ/K9eb781NC81POz9cMwzAMwzAMwzAMwzAMwzAMw/xP/AJOdTYQkodz5QAAAABJRU5ErkJggg=="
             alt="Appliance"
             style={{ width: '70%', height: '40%' }}
          />
          <p style={grayTextStyle}>Upto 60% off on summer Appliances</p>
          <Button style={whiteTextStyle}>GRAB NOW</Button>
        </div>
        <div style={cardStyle}>
          <h1 style={headingStyle}>Upto 60% off on Appliances</h1>
          <img
             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAMAAABCBMsOAAAAn1BMVEX///8AAAD6+vpTU1Pe3t65ubn///0eHh6IiIj39/f09PTx8fHJycmwsLCmpqapqamUlJR6enr+lADS0tLn5+fBwcEpKSlbW1sLCwv+kACAgIA7Oztvb28TExNDQ0M0NDRjY2P3w39KSkqenp77++r679r68+P337v9+O/4yJLylwD2hQD0t2fysVb3q1D77M/62bD4vXT50J31pDr1oSz3iRKbAAADN0lEQVR4nO2VC3OiMBCANxF5oyIPg4rPKr4qVvv/f9vtBmx7vbE3c2jnOrPfjBCyJPvBhgjAMAzDMAzDMAzDMAzDMAzDMAzDMAzD/GCi4Xg89KnlBwEYdhgAxHbYlTqaUDTSrU6X6NCF7IZh16XeIGjjDGHSzEGOhWaG7YUQAbXtmI4LzOK0qmgPo6OqKYYAhqVb5IMnX49pZNETwhoPaC6AllB6epXqJG2AUIhpSCYGwCC3LEsbeSi0mGHTIwul9fK4icVUP9JEPy6ms/y2FkhS6omnQkXgYJSqZBgx6qYxdIVouWRo63cxjbrVU/w7URsfGWw9I1p0AGa6rXtk1KbJB7ofoXol2rmLIzG/B1XPVL+5JhiBPbCuFjjXUOewq8WA0WErry1ilebY6aX6yQ3sjski1p6NLDx8scLKb1h4VP1U1RYDy5o6KJPqKtISNaBaHU0tMM3E98IPFuG7hcTZB5FbVQo6IhXRQyywuMIFuGHh69LX6wVvVbpIsloFhqgr0tyCvgg8pXobaKnaolNbBEK1XOmO9HuZ4Gc8mrSWXr1+cejCuY9FoveFZfXBL8hCkoWsLNoiVwlp5dPYULhbKNrNcJBKIw+/lCXcx8KpdsFpTluCrsi7hQ2xpTAgJiIXPhbAGsxwe03pFtRRYgJ3sgB/RJunXNIsszxPpBzmCveoXk4fZYJLwLLdXu6DMfY9x3G9YAzSGVo0yiMLK3dppGr2T+L5Pm7PQD/cHR3p4NHDbLhTOlLGFJUORfEEGAZw8WD4iQEe5jeM68hGFh+R15+U1JD64u1U9b11Yznl3TIzzE/C/EvwabV6+vqmxqyLL8PmZrvb77Ps8FiLzfOxpAzmjactt6ei2PaPD7XA5C/756Jq/hGs1ErTzF4eXBKAYrffbcsbWcrzbl+u9qcHO2D29byf9S/zYr35qGJuNuX80u9fVrDdbR5soUVWz31kdzlsz0VZrsqyOG0Px12WZa8nLMvl/HgJqj+s5q8ZmWRXqN0/FORYHr5Bogbf//G1/8bu+HKqK2Q+emX+jrkui/McOZ/K9eb781NC81POz9cMwzAMwzAMwzAMwzAMwzAMw/xP/AJOdTYQkodz5QAAAABJRU5ErkJggg=="
             alt="Appliance"
             style={{ width: '70%', height: '40%' }}
          />
          <p style={grayTextStyle}>Upto 60% off on summer Appliances</p>
          <Button style={whiteTextStyle}>GRAB NOW</Button>
        </div>
        <div style={cardStyle}>
          <h1 style={headingStyle}>Upto 60% off on Appliances</h1>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAMAAABCBMsOAAAAn1BMVEX///8AAAD6+vpTU1Pe3t65ubn///0eHh6IiIj39/f09PTx8fHJycmwsLCmpqapqamUlJR6enr+lADS0tLn5+fBwcEpKSlbW1sLCwv+kACAgIA7Oztvb28TExNDQ0M0NDRjY2P3w39KSkqenp77++r679r68+P337v9+O/4yJLylwD2hQD0t2fysVb3q1D77M/62bD4vXT50J31pDr1oSz3iRKbAAADN0lEQVR4nO2VC3OiMBCANxF5oyIPg4rPKr4qVvv/f9vtBmx7vbE3c2jnOrPfjBCyJPvBhgjAMAzDMAzDMAzDMAzDMAzDMAzDMAzD/GCi4Xg89KnlBwEYdhgAxHbYlTqaUDTSrU6X6NCF7IZh16XeIGjjDGHSzEGOhWaG7YUQAbXtmI4LzOK0qmgPo6OqKYYAhqVb5IMnX49pZNETwhoPaC6AllB6epXqJG2AUIhpSCYGwCC3LEsbeSi0mGHTIwul9fK4icVUP9JEPy6ms/y2FkhS6omnQkXgYJSqZBgx6qYxdIVouWRo63cxjbrVU/w7URsfGWw9I1p0AGa6rXtk1KbJB7ofoXol2rmLIzG/B1XPVL+5JhiBPbCuFjjXUOewq8WA0WErry1ilebY6aX6yQ3sjski1p6NLDx8scLKb1h4VP1U1RYDy5o6KJPqKtISNaBaHU0tMM3E98IPFuG7hcTZB5FbVQo6IhXRQyywuMIFuGHh69LX6wVvVbpIsloFhqgr0tyCvgg8pXobaKnaolNbBEK1XOmO9HuZ4Gc8mrSWXr1+cejCuY9FoveFZfXBL8hCkoWsLNoiVwlp5dPYULhbKNrNcJBKIw+/lCXcx8KpdsFpTluCrsi7hQ2xpTAgJiIXPhbAGsxwe03pFtRRYgJ3sgB/RJunXNIsszxPpBzmCveoXk4fZYJLwLLdXu6DMfY9x3G9YAzSGVo0yiMLK3dppGr2T+L5Pm7PQD/cHR3p4NHDbLhTOlLGFJUORfEEGAZw8WD4iQEe5jeM68hGFh+R15+U1JD64u1U9b11Yznl3TIzzE/C/EvwabV6+vqmxqyLL8PmZrvb77Ps8FiLzfOxpAzmjactt6ei2PaPD7XA5C/756Jq/hGs1ErTzF4eXBKAYrffbcsbWcrzbl+u9qcHO2D29byf9S/zYr35qGJuNuX80u9fVrDdbR5soUVWz31kdzlsz0VZrsqyOG0Px12WZa8nLMvl/HgJqj+s5q8ZmWRXqN0/FORYHr5Bogbf//G1/8bu+HKqK2Q+emX+jrkui/McOZ/K9eb781NC81POz9cMwzAMwzAMwzAMwzAMwzAMw/xP/AJOdTYQkodz5QAAAABJRU5ErkJggg=="
            alt="Appliance"
            style={{ width: '70%', height: '40%' }}
          />
          <p style={grayTextStyle}>Upto 60% off on summer Appliances</p>
          <Button style={whiteTextStyle}>GRAB NOW</Button>
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
