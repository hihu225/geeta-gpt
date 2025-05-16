export const getStyles = (theme, fontSize, isOpen, isListening) => ({
  // Enhanced translation style with more elegant borders and spacing
  shlokaTranslation: {
    fontSize: fontSize === "small" ? "0.9rem" : fontSize === "medium" ? "1rem" : "1.15rem",
    color: theme === "light" ? "#3A5311" : "#9ACD32",
    lineHeight: "1.6",
    marginTop: "0.8rem",
    marginBottom: "0.6rem",
    fontStyle: "italic",
    borderTop: `1px solid ${theme === "light" ? "#D4A01799" : "#B8860B99"}`,
    paddingTop: "0.8rem",
    textShadow: theme === "light" ? "0.5px 0.5px 1px rgba(0,0,0,0.05)" : "none",
  },

  // Refined container with smoother gradients and responsive width
  container: {
  minHeight: "100vh",
  width: "100%",
  background: theme === "light" 
    ? "linear-gradient(135deg, #FDF5E6, #F8E8C8, #F5DEB3)"
    : "linear-gradient(135deg, #2A2A2A, #1A1A1A, #121212)",
  fontFamily: "'Palatino Linotype', 'Book Antiqua', 'Baskerville', serif",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",        // Added padding for small screens
  flexDirection: "column",
  backgroundAttachment: "fixed",
  transition: "all 0.5s ease",
  overflowX: "hidden",    // Prevent horizontal scrolling
  boxSizing: "border-box" // Ensure padding doesn't cause overflow
},

paper: {
  width: "100%",           // Use full width of the container
  maxWidth: "600px",       // Max width for larger screens
  marginLeft: "auto",
  marginRight: "auto",
  padding: "1.5rem 1rem",  // Reduced side padding for small devices
  borderRadius: "12px",
  backgroundColor: theme === "light" ? "rgba(255, 252, 240, 0.97)" : "rgba(40, 40, 40, 0.97)",
  border: theme === "light" ? "2px solid #D4A017" : "2px solid #664D00",
  boxShadow: theme === "light" 
    ? "0 10px 20px rgba(139, 0, 0, 0.1), 0 5px 10px rgba(139, 0, 0, 0.08)"
    : "0 10px 20px rgba(0, 0, 0, 0.25), 0 5px 10px rgba(0, 0, 0, 0.15)",
  textAlign: "center",
  transition: "all 0.3s ease",
  margin: "0.5rem auto",
  boxSizing: "border-box"  // Prevent overflow due to padding
},


  // Refined small button with better proportions for mobile
  smallButtonStyle: {
    padding: "0.6rem 1.2rem",
    fontSize: "0.9rem",
    backgroundColor: theme === "light" ? "#8B4513" : "#CD853F",
    color: "#FFF",
    border: `1px solid ${theme === "light" ? "#D2B48C" : "#8B4513"}`,
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
    fontWeight: 600,
    fontFamily: "'Georgia', 'Times New Roman', serif",
    letterSpacing: "0.4px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
    transform: "translateZ(0)",
    ":hover": {
      backgroundColor: theme === "light" ? "#A0522D" : "#DE9A5A",
      transform: "translateY(-1px)",
      boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
    },
  },

  favoritesButton: {
    padding: "0.6rem 1.2rem",
    fontSize: "0.9rem",
    backgroundColor: theme === "light" ? "#8B4513" : "#CD853F",
    color: "#FFF",
    border: `1px solid ${theme === "light" ? "#D2B48C" : "#8B4513"}`,
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
    fontWeight: 600,
    fontFamily: "'Georgia', 'Times New Roman', serif",
    letterSpacing: "0.4px",
    boxShadow: "0 3px 8px rgba(0, 0, 0, 0.08)",
    transition: "all 0.3s ease",
    transform: "translateZ(0)",
    ":hover": {
      transform: "translateY(-1px)",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.12)",
    },
  },

  // Enhanced selected chat bubble with more distinct styling
  selectedChatBubble: {
    borderLeft: `4px solid ${theme === "light" ? "#8B0000" : "#B22222"}`,
    backgroundColor: theme === "light" ? 'rgba(255, 240, 205, 0.65)' : 'rgba(61, 61, 61, 0.65)',
    boxShadow: theme === "light" 
      ? "0 4px 12px rgba(139, 0, 0, 0.08)"
      : "0 4px 12px rgba(0, 0, 0, 0.15)",
  },

  // Improved checkbox container positioning for mobile
  checkboxContainer: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    zIndex: 5,
  },

  // Refined checkbox style
  checkbox: {
    width: '18px',
    height: '18px',
    cursor: 'pointer',
    accentColor: theme === "light" ? "#8B0000" : "#B22222",
  },

  // Enhanced title with mobile-friendly font sizing
  title: {
    color: theme === "light" ? "#8B0000" : "#FF6B6B",
    fontWeight: "bold",
    fontSize: "2rem",
    textShadow: theme === "light" 
      ? "1px 1px 3px rgba(139, 0, 0, 0.15), 0 0 1px rgba(139, 0, 0, 0.1)"
      : "1px 1px 3px rgba(255, 107, 107, 0.15), 0 0 1px rgba(255, 107, 107, 0.1)",
    marginBottom: "1.2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    letterSpacing: "0.5px",
    fontFamily: "'Palatino Linotype', 'Book Antiqua', serif",
    flexWrap: "wrap", // Allow wrapping on small screens
  },

  // Refined edit button with improved accessibility for touch
  editButton: {
    position: "absolute",
    top: "12px",
    right: "68px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    color: theme === "light" ? "#8B4513" : "#CD853F",
    fontSize: "1.1rem",
    padding: "8px",
    transition: "all 0.2s ease",
    opacity: "0.8",
    zIndex: 10,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "36px", // Increased touch target
    height: "36px", // Increased touch target
  },

  // Better structured edit form
  editForm: {
    marginTop: "0.8rem",
    marginBottom: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
  },

  // Enhanced edit input with better focus states
  editInput: {
    width: "100%",
    padding: "0.7rem",
    borderRadius: "8px",
    border: theme === "light" ? "2px solid #B8860B" : "2px solid #664D00",
    fontSize: fontSize === "small" ? "0.9rem" : fontSize === "medium" ? "1rem" : "1.1rem",
    backgroundColor: theme === "light" ? "#FFFAF0" : "#333",
    color: theme === "light" ? "#663300" : "#E6C99D",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    transition: "all 0.3s ease",
    outline: "none",
  },

  // Better organized edit buttons container
  editButtonsContainer: {
    display: "flex",
    gap: "10px",
    justifyContent: "flex-end",
    marginTop: "8px",
  },

  // Enhanced save button with better touch targets
  editSaveButton: {
    backgroundColor: theme === "light" ? "#006400" : "#2E8B57",
    color: "white",
    border: "none",
    padding: "0.6rem 1.2rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: "500",
    boxShadow: "0 3px 6px rgba(0,100,0,0.2)",
    transition: "all 0.2s ease",
    letterSpacing: "0.3px",
    minWidth: "60px", // Ensure reasonable touch target
  },

  // Enhanced cancel button with better touch targets
  editCancelButton: {
    backgroundColor: theme === "light" ? "#8B0000" : "#B22222",
    color: "white",
    border: "none",
    padding: "0.6rem 1.2rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: "500",
    boxShadow: "0 3px 6px rgba(139,0,0,0.2)",
    transition: "all 0.2s ease",
    letterSpacing: "0.3px",
    minWidth: "60px", // Ensure reasonable touch target
  },

  // Refined subtitle with better typography for mobile
  subtitle: {
    fontSize: fontSize === "small" ? "1rem" : fontSize === "medium" ? "1.1rem" : "1.2rem",
    color: theme === "light" ? "#663300" : "#D2B48C",
    marginBottom: "1.5rem",
    fontStyle: "italic",
    letterSpacing: "0.4px",
    fontWeight: "500",
    textShadow: theme === "light" ? "0.5px 0.5px 1px rgba(0,0,0,0.05)" : "none",
  },

  // Enhanced Geeta quote with mobile-friendly sizing
  geetaQuote: {
    fontSize: fontSize === "small" ? "1.1rem" : fontSize === "medium" ? "1.2rem" : "1.3rem",
    color: theme === "light" ? "#8B0000" : "#FF6B6B",
    fontWeight: "bold",
    margin: "1.5rem 0",
    background: theme === "light" 
      ? "linear-gradient(to right, #F9E4B7, #F7E3BC, #F9E4B7)"
      : "linear-gradient(to right, #3A3A3A, #2D2D2D, #3A3A3A)",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: theme === "light"
      ? "0 4px 8px rgba(0,0,0,0.08)"
      : "0 4px 8px rgba(0,0,0,0.15)",
    borderLeft: theme === "light" ? "4px solid #D4A017" : "4px solid #B8860B",
    textShadow: theme === "light" ? "1px 1px 2px rgba(0,0,0,0.08)" : "none",
    lineHeight: "1.5",
    letterSpacing: "0.2px",
  },

  // Better organized language toggle with improved spacing for mobile
  languageToggle: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
    marginBottom: "1rem",
    gap: "8px",
    flexWrap: "wrap", // Allow wrapping on small screens
  },

  // Refined language button with better hover states and touch targets
  languageButton: {
    backgroundColor: theme === "light" ? "#B8860B" : "#CD853F",
    color: "white",
    border: "none",
    padding: "0.6rem 1rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: fontSize === "small" ? "0.85rem" : fontSize === "medium" ? "0.9rem" : "1rem",
    fontWeight: "600",
    boxShadow: "0 3px 6px rgba(0,0,0,0.15)",
    transition: "all 0.2s ease",
    letterSpacing: "0.2px",
    minWidth: "60px", // Ensure reasonable touch target
  },

  // Better defined favorites section with improved spacing
  favoritesSection: {
    marginTop: "2rem",
    borderTop: `2px solid ${theme === "light" ? "#D4A017" : "#B8860B"}`,
    paddingTop: "1.5rem",
  },

  // Enhanced form with better alignment and spacing for mobile
 form: {
  marginBottom: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",
  boxSizing: "border-box",
  padding: "0 1rem", // adds breathing room on both sides for mobile
},
floatingLabel: {
  position: "absolute",
  left: "2.8rem",       // same as input's left padding
  top: "50%",
  transform: "translateY(-50%)",
  color: theme === "light" ? "#999" : "#bbb",
  fontSize: "1rem",
  pointerEvents: "none",
  transition: "all 0.2s ease-out",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "calc(100% - 3rem)",  // leaves some right padding
},
floatingLabelActive: {
  top: "0.3rem",
  fontSize: "0.75rem",
  color: theme === "light" ? "#b29600" : "#d4a017",
  transform: "translateY(0)",
  whiteSpace: "normal",
},
floatingPlaceholder: {
  animation: "scrollText 10s linear infinite",
  whiteSpace: "nowrap",
  display: "inline-block",
},
inputContainer: {
  position: "relative",
  width: "100%",
  boxSizing: "border-box",
},
inputWrapper: {
  position: "relative",
  width: "100%",
  boxSizing: "border-box",
  overflow: "hidden",
},

scrollingPlaceholder: {
  position: "absolute",
  top: "50%",
  left: "2.8rem", // after icon
  right: "1rem",
  transform: "translateY(-50%)",
  whiteSpace: "nowrap",
  overflow: "hidden",
  pointerEvents: "none",
},

scrollingText: {
  display: "inline-block",
  paddingLeft: "100%",
  animation: "scrollText 12s linear infinite",
  color: "#b29600",
  fontSize: "1rem",
  fontFamily: "'Palatino Linotype', serif",
  opacity: 0.85,
},


  // Refined input field with better focus states for mobile
  input: {
  width: "100%",
  padding: "0.8rem 1rem 0.8rem 2.8rem", // leave room for icon
  fontSize: "1rem",
  borderRadius: "0.8rem",
  border: "2px solid #b29600",
  outline: "none",
  backgroundColor: theme === "light" ? "#fdfaf3" : "#1c1c1c",
  color: theme === "light" ? "#333" : "#fdfaf3",
  boxSizing: "border-box",
},

  // Enhanced book icon with better positioning for mobile
  bookIcon: {
  position: "absolute",
  top: "50%",
  left: "1rem",
  transform: "translateY(-50%)",
  fontSize: "1.3rem",
  color: isListening ? "#FF4500" : theme === "light" ? "#8B0000" : "#B22222",
  pointerEvents: "none",
  zIndex: 1,
},


  // Enhanced submit button with better hover effects and sizing for mobile
  submitButton: {
    backgroundColor: theme === "light" ? "#8B0000" : "#B22222",
    color: "white",
    border: "none",
    padding: "0.8rem 1.5rem",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: fontSize === "small" ? "0.9rem" : fontSize === "medium" ? "1rem" : "1.1rem",
    fontWeight: "bold",
    boxShadow: "0 4px 8px rgba(139, 0, 0, 0.3)",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "all 0.3s ease",
    letterSpacing: "0.3px",
  },

  // Enhanced voice button with better hover states and touch target
  voiceButton: {
    backgroundColor: isListening ? "#FF4500" : theme === "light" ? "#8B0000" : "#B22222",
    color: "white",
    border: "none",
    padding: "0.8rem",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "1rem",
    boxShadow: "0 4px 8px rgba(139, 0, 0, 0.25)",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px", // Adjusted for mobile
    height: "40px", // Adjusted for mobile
    transform: isListening ? "scale(1.05)" : "scale(1)",
  },

  // Enhanced view more button with better hover effects and mobile sizing
  viewMoreButton: {
    backgroundColor: theme === "light" ? "#B8860B" : "#CD853F",
    color: "white",
    border: "none",
    padding: "0.8rem 1.5rem",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: fontSize === "small" ? "0.9rem" : fontSize === "medium" ? "1rem" : "1.1rem",
    fontWeight: "600",
    boxShadow: "0 4px 8px rgba(139, 69, 19, 0.25)",
    margin: "1.5rem auto",
    display: "block",
    transition: "all 0.2s ease",
    letterSpacing: "0.3px",
    minWidth: "150px",
  },

  // Better organized chat container with improved spacing
  chatContainer: {
    marginTop: "2rem",
    width: "100%",
  },

  // Enhanced delete button with better hover effects and touch target
  deleteButton: {
    position: "absolute",
    top: "12px",
    right: "12px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    color: theme === "light" ? "#8B0000" : "#FF6B6B",
    fontSize: "1.1rem",
    padding: "8px",
    transition: "all 0.2s ease",
    opacity: "0.8",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "36px", // Increased touch target
    height: "36px", // Increased touch target
  },

  // Enhanced user message with better typography for mobile
  userMessage: {
    color: theme === "light" ? "#006400" : "#4CAF50",
    fontWeight: "600",
    marginBottom: "0.8rem",
    fontSize: fontSize === "small" ? "0.9rem" : fontSize === "medium" ? "1rem" : "1.1rem",
    letterSpacing: "0.2px",
  },

  // Enhanced timestamp with better typography for mobile
  timestamp: {
    fontSize: fontSize === "small" ? "0.7rem" : fontSize === "medium" ? "0.75rem" : "0.8rem",
    color: theme === "light" ? "#996633" : "#CD853F",
    marginBottom: "0.8rem",
    fontStyle: "italic",
    opacity: "0.9",
  },

  // Enhanced bot response with better typography and spacing for mobile
  botResponse: {
    color: theme === "light" ? "#8B4513" : "#D2B48C",
    marginBottom: "1rem",
    lineHeight: "1.6",
    fontSize: fontSize === "small" ? "0.9rem" : fontSize === "medium" ? "1rem" : "1.1rem",
    letterSpacing: "0.2px",
  },

  // Enhanced shloka container with more elegant styling for mobile
  shlokaContainer: {
    backgroundColor: theme === "light" ? "#FDF6E3" : "#333",
    border: theme === "light" ? "2px solid #D4A017" : "2px solid #B8860B",
    borderRadius: "10px",
    padding: "1.2rem",
    marginTop: "1.2rem",
    textAlign: "center",
    fontWeight: "bold",
    boxShadow: theme === "light" 
      ? "0 4px 10px rgba(0,0,0,0.08)"
      : "0 4px 10px rgba(0,0,0,0.15)",
  },

  // Enhanced shloka with better typography for mobile
  shloka: {
    fontSize: fontSize === "small" ? "1rem" : fontSize === "medium" ? "1.1rem" : "1.2rem",
    color: theme === "light" ? "#8B0000" : "#FF6B6B",
    lineHeight: "1.6",
    letterSpacing: "0.2px",
    textShadow: theme === "light" ? "0.5px 0.5px 1px rgba(0,0,0,0.05)" : "none",
  },

  // Enhanced footer with better spacing and typography for mobile
  footer: {
    marginTop: "2rem",
    fontSize: fontSize === "small" ? "0.8rem" : fontSize === "medium" ? "0.85rem" : "0.9rem",
    color: theme === "light" ? "#8B4513" : "#D2B48C",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    letterSpacing: "0.2px",
    opacity: "0.9",
  },

  // Enhanced preferences bar with better spacing and styling for mobile
  preferencesBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
    padding: "0.8rem",
    backgroundColor: theme === "light" ? "rgba(255, 248, 220, 0.6)" : "rgba(30, 30, 30, 0.6)",
    borderRadius: "10px",
    border: `1px solid ${theme === "light" ? "#B8860B" : "#444"}`,
    boxShadow: theme === "light" 
      ? "0 3px 6px rgba(0,0,0,0.05)"
      : "0 3px 6px rgba(0,0,0,0.1)",
    flexWrap: "wrap", // Allow wrapping on small screens
    gap: "8px", // Add gap for wrapped content
  },

  // Enhanced preferences button with better hover states and touch targets
  preferencesButton: {
    backgroundColor: "transparent",
    color: theme === "light" ? "#8B0000" : "white",
    border: "none",
    padding: "0.6rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    transition: "all 0.2s ease",
    boxShadow: "none",
    opacity: "0.9",
    minWidth: "36px", // Ensure reasonable touch target
    minHeight: "36px", // Ensure reasonable touch target
  },

  // Better organized font size controls with improved spacing for mobile
  fontSizeControls: {
    display: "flex",
    gap: "6px",
  },

  // Enhanced font button with better hover states and touch targets
  fontButton: {
    backgroundColor: "transparent",
    color: theme === "light" ? "#8B0000" : "white",
    border: "none",
    padding: "0.5rem 0.6rem",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    fontWeight: "600",
    fontSize: index => ["0.85rem", "1rem", "1.15rem"][index],
    opacity: "0.9",
    minWidth: "30px", // Ensure reasonable touch target
    minHeight: "30px", // Ensure reasonable touch target
  },

  // Enhanced favorite button with better hover states and touch target
  favoriteButton: {
    position: "absolute",
    top: "12px",
    right: "40px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "1.1rem",
    padding: "8px",
    transition: "all 0.2s ease",
    opacity: "0.8",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "36px", // Increased touch target
    height: "36px", // Increased touch target
  },

  // Enhanced spinner with smoother animation
  spinner: {
    animation: "spin 1.8s ease-in-out infinite",
  },

  "@keyframes spin": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" }
  },

  // Better organized button container with improved spacing for mobile
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap", // Allow wrapping on small screens
  },

  // Enhanced chat bubble with more elegant styling for mobile
  chatBubble: {
    backgroundColor: theme === "light" ? "#FFF8DC" : "#2D2D2D",
    padding: "1.5rem",
    borderRadius: "12px",
    marginBottom: "1.5rem",
    boxShadow: theme === "light" 
      ? "0 5px 15px rgba(0,0,0,0.08)"
      : "0 5px 15px rgba(0,0,0,0.15)",
    textAlign: "left",
    position: "relative",
    borderLeft: theme === "light" ? "4px solid #B8860B" : "4px solid #CD853F",
    transition: "all 0.3s ease",
  },

  // Enhanced verse info with better typography for mobile
  verseInfo: {
    fontSize: fontSize === "small" ? "0.9rem" : fontSize === "medium" ? "1rem" : "1.1rem",
    color: theme === "light" ? "#8B4513" : "#D2B48C",
    marginTop: "0.6rem",
    fontStyle: "italic",
    fontFamily: "'Arial Unicode MS', 'Noto Sans', sans-serif",
    letterSpacing: "0.2px",
    opacity: "0.9",
  },

  // Enhanced share button with better hover effects and touch targets
  shareButton: {
    backgroundColor: theme === "light" ? "#006400" : "#2E8B57",
    color: "white",
    border: "none",
    padding: "0.6rem 1.2rem",
    borderRadius: "9px",
    cursor: "pointer",
    fontSize: fontSize === "small" ? "0.9rem" : fontSize === "medium" ? "0.95rem" : "1rem",
    marginTop: "1rem",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    boxShadow: "0 4px 8px rgba(0,100,0,0.25)",
    transition: "all 0.2s ease",
    fontWeight: "600",
    letterSpacing: "0.2px",
    minWidth: "80px", // Ensure reasonable touch target
  },
});