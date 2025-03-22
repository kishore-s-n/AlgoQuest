import React, { useState } from "react";
import "./Leaderboard.css";
import { FaTrophy, FaUser, FaClock, FaSortNumericDown, FaArrowLeft, FaArrowRight } from "react-icons/fa"; 

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: "SN Kishore", score: 2500, time: "45 min" },
    { rank: 2, name: "RajeshKumar", score: 2300, time: "56 min" },
    { rank: 3, name: "Jefin Paul", score: 2200, time: "1 hrs" },
    { rank: 4, name: "Praveen", score: 2100, time: "1 hr 3 min" },
    { rank: 5, name: "Kumar", score: 2000, time: "1 hr 10 min" },
    { rank: 6, name: "Leo", score: 2000, time: "1 hr 15 min" },
    { rank: 7, name: "Gandhi", score: 2000, time: "1 hr 20 min" },
    { rank: 8, name: "Sam", score: 1950, time: "1 hr 25 min" }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(leaderboardData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = leaderboardData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">CURRENT LEADERBOARD</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th><FaSortNumericDown /> Rank</th>
            <th><FaUser /> Name</th>
            <th><FaTrophy /> Score</th>
            <th><FaClock /> Time</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((player, index) => (
            <tr key={index}
              className={
                currentPage === 1
                  ? index === 0
                    ? "gold"
                    : index === 1
                    ? "silver"
                    : index === 2
                    ? "bronze"
                    : ""
                  : ""
              }
            >
              <td>{player.rank}</td>
              <td>{player.name}</td>
              <td>{player.score}</td>
              <td>{player.time}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls with Arrows */}
      <div className="pagination">
        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
          className="arrow-button"
        >
          <FaArrowLeft />
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
          className="arrow-button"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Leaderboard;
