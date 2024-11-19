import React, { useState } from "react";

interface UsernameCustomizerProps {
  onChange: (formattedUsername: string) => void;
}

const UsernameCustomizer: React.FC<UsernameCustomizerProps> = ({
  onChange,
}) => {
  const [username, setUsername] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [color, setColor] = useState("black");
  const [size, setSize] = useState(14);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    updateFormattedUsername(event.target.value, isBold, isItalic, color, size);
  };

  const handleBoldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsBold(event.target.checked);
    updateFormattedUsername(
      username,
      event.target.checked,
      isItalic,
      color,
      size
    );
  };

  const handleItalicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsItalic(event.target.checked);
    updateFormattedUsername(
      username,
      isBold,
      event.target.checked,
      color,
      size
    );
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
    updateFormattedUsername(
      username,
      isBold,
      isItalic,
      event.target.value,
      size
    );
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = parseInt(event.target.value, 10);
    setSize(newSize);
    updateFormattedUsername(username, isBold, isItalic, color, newSize);
  };

  const updateFormattedUsername = (
    username: string,
    bold: boolean,
    italic: boolean,
    color: string,
    size: number
  ) => {
    let formattedUsername = username;
    if (bold) {
      formattedUsername = `<b>${formattedUsername}</b>`;
    }
    if (italic) {
      formattedUsername = `<i>${formattedUsername}</i>`;
    }
    formattedUsername = `<color=${color}>${formattedUsername}</color>`;
    formattedUsername = `<size=${size}>${formattedUsername}</size>`;
    onChange(formattedUsername);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col">
        <label className="mb-1 font-semibold">Username:</label>
        <input
          className="p-2 border rounded-2xl"
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="flex items-center space-x-2">
        <input type="checkbox" checked={isBold} onChange={handleBoldChange} />
        <label className="font-semibold">Bold</label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={isItalic}
          onChange={handleItalicChange}
        />
        <label className="font-semibold">Italic</label>
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-semibold">Color:</label>
        <select
          className="p-2 border rounded-2xl"
          value={color}
          onChange={handleColorChange}
        >
          <option value="black">Black</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="orange">Orange</option>
          <option value="purple">Purple</option>
          <option value="white">White</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="mb-1 font-semibold">Size:</label>
        <input
          className="p-2 border rounded-2xl"
          type="number"
          value={size}
          onChange={handleSizeChange}
          min="10"
          max="100"
        />
      </div>
    </div>
  );
};

export default UsernameCustomizer;
