import React, { useState, useEffect } from "react";
import { Box, Button, TextField, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true); // Giả sử người dùng đã đăng nhập
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const location = useLocation();

  // Cập nhật activeTab dựa trên đường dẫn hiện tại
  const getActiveTab = () => {
    switch (location.pathname) {
      case "/":
        return "home";
      case "/auction":
        return "auction";
      case "/about":
        return "about";
      case "/login":
        return "login";
      default:
        return "";
    }
  };
  const activeTab = getActiveTab();

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

  // Mở và đóng menu người dùng
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
      <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{
            fontWeight: activeTab === "home" ? "bold" : "normal",
            color: activeTab === "home" ? "primary.main" : "inherit",
          }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/auction"
          sx={{
            fontWeight: activeTab === "auction" ? "bold" : "normal",
            color: activeTab === "auction" ? "primary.main" : "inherit",
          }}
        >
          Auction
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/about"
          sx={{
            fontWeight: activeTab === "about" ? "bold" : "normal",
            color: activeTab === "about" ? "primary.main" : "inherit",
          }}
        >
          About
        </Button>

        {/* Hiển thị nút Login hoặc avatar và giỏ hàng dựa trên trạng thái đăng nhập */}
        {isLoggedIn ? (
          <>
            {/* Nút giỏ hàng */}
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>

            {/* Avatar và tên người dùng */}
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <AccountCircleIcon />
            </IconButton>
            <Typography variant="body1" sx={{ ml: 1 }}>
              John Doe
            </Typography>

            {/* Menu người dùng */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
                Profile
              </MenuItem>
              <MenuItem component={Link} to="/settings" onClick={handleMenuClose}>
                Settings
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setIsLoggedIn(false);
                  handleMenuClose();
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Button
            color="inherit"
            component={Link}
            to="/login"
            sx={{
              fontWeight: activeTab === "login" ? "bold" : "normal",
              color: activeTab === "login" ? "primary.main" : "inherit",
            }}
          >
            Login
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default Header;
