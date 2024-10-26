import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("home");
  const navigate = useNavigate();

  // Xử lý thay đổi giá trị đầu vào
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Xử lý tìm kiếm
  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      console.log("Search for:", searchQuery);
      setSearchQuery("");
    }
  };

  // Xử lý khi nhấn phím Enter
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  // Xử lý thay đổi tab và điều hướng
  const handleTabChange = (tab: string, path: string) => {
    setActiveTab(tab);
    navigate(path);
  };

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        width: "100%",
        zIndex: 1100,
        bgcolor: "white",
        color: "black",
        p: 2,
        boxShadow: 1,
      }}
    >
      {/* Logo */}
      <Box sx={{ fontWeight: "bold", fontSize: "1.25rem" }}>Logo</Box>

      {/* Search Bar */}
      <TextField
        variant="outlined"
        placeholder="Search..."
        size="small"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        sx={{ bgcolor: "white", borderRadius: 1 }}
      />

      {/* Navigation Links */}
      <Box sx={{ display: "flex", gap: 3 }}>
        <Button
          color="inherit"
          onClick={() => handleTabChange("home", "/")}
          sx={{
            fontWeight: activeTab === "home" ? "bold" : "normal",
            color: activeTab === "home" ? "primary.main" : "inherit",
          }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          onClick={() => handleTabChange("auction", "/auction")}
          sx={{
            fontWeight: activeTab === "auction" ? "bold" : "normal",
            color: activeTab === "auction" ? "primary.main" : "inherit",
          }}
        >
          Auction
        </Button>
        <Button
          color="inherit"
          onClick={() => handleTabChange("about", "/about")}
          sx={{
            fontWeight: activeTab === "about" ? "bold" : "normal",
            color: activeTab === "about" ? "primary.main" : "inherit",
          }}
        >
          About
        </Button>
        <Button
          color="inherit"
          onClick={() => handleTabChange("login", "/login")}
          sx={{
            fontWeight: activeTab === "login" ? "bold" : "normal",
            color: activeTab === "login" ? "primary.main" : "inherit",
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Header;
