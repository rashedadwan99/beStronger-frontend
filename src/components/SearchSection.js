import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { searchUsers } from "../services/userService";
import Button from "./common/button";
import RenderInputField from "./common/Forms";
import { Toast } from "./common/Toast";
import UserList from "./common/UsersList";
import "./searchsection.css";
import UserListSkeleton from "./skeleton/UserListSkeleton";
function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmptyResult, setIsEmptyResult] = useState(false);
  const showCanvas = useSelector((state) => state.canvas.show);
  useEffect(() => {
    if (!showCanvas) {
      setSearchQuery("");
      setIsEmptyResult(false);
      setResults([]);
    }
    if (!searchQuery.length) {
      setIsEmptyResult(false);
    }
  }, [showCanvas, searchQuery]);
  const handleSearch = async () => {
    if (!searchQuery.length) {
      Toast("info", "please enter something in searching field");
      return;
    }
    try {
      setIsLoading(true);
      setIsEmptyResult(false);
      const { data: results } = await searchUsers(searchQuery);
      setResults(results);
      setIsLoading(false);
      if (!results.length) setIsEmptyResult(true);
    } catch (error) {
      Toast("error", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="search-section">
      <div className="search-input">
        <RenderInputField
          type="text"
          placeholder="search by name or email"
          value={searchQuery}
          data={searchQuery}
          setData={setSearchQuery}
          name="search"
        />
        <Button
          label="Go"
          onClick={!isLoading ? handleSearch : () => {}}
          disabled={isLoading}
        />
      </div>
      <div className="search-results">
        {!isLoading ? (
          <UserList users={results} />
        ) : (
          <UserListSkeleton number={5} />
        )}
        {isEmptyResult && !isLoading && <h6>there are not results</h6>}
      </div>
    </div>
  );
}

export default SearchSection;
