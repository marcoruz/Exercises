//Notwendige Module und Komponenten importieren
import React, { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FaTwitter } from 'react-icons/fa';
import { styled } from '@mui/material/styles'; // Importieren der 'styled' API von Material-UI für benutzerdefiniertes Styling
import CancelIcon from '@mui/icons-material/Cancel'; // Importieren des 'Cancel Icon' von Material-UI-Symbolen

// Hauptkomponenten der App
function App() {   
  // Zustandsvariablen zur Verwaltung von Aufgaben und Benutzereingaben zum Hinzufügen neuer Aufgaben
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Eingabeänderungen im Textfeld
  const handleInputChange = (e) => {
    setNewTask(e.target.value.slice(0, 300)); // Begrenzung der Eingabe auf 300 Zeichen und aktualisiert newTask-Status
  };

// Event handler für das Einfügen einer neuen Task in die Liste
  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { text: newTask, completed: false }]); // Fügt eine neue Aufgabe zum Status "Aufgaben" hinzu
    setNewTask(''); // Löscht das Eingabefeld nach dem Hinzufügen der Aufgabe 
  };

  // Ereignisbehandlungsroutine zum Umschalten des Erledigt-Status einer Aufgabe
  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed; // Schaltet die Eigenschaft "abgeschlossen" der Aufgabe mit dem angegebenen Index um
    setTasks(updatedTasks); // Aktualisiert den Status "Aufgaben" mit der geänderten Aufgabenliste
  };

  // Event handler für das löschen erledigter Aufgaben aus der Liste
  const handleClearCompleted = () => {
    const remainingTasks = tasks.filter((task) => !task.completed); // hier werden die erledigten Aufgaben heraus gefiltert  und behält nur die verbleibenden Aufgaben bleiben
    setTasks(remainingTasks); // Aktualisiert den Status "Aufgaben" mit den verbleibenden Aufgaben
  };
//   benutzerdefinierte Schaltfläche mit der API 'styled'. Lösch button
  const CustomCancelButton = styled(Button)({
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    backgroundColor: 'red',
    color: 'white',
    '&:hover': {
      backgroundColor: 'darkred',
    },
  });

  // JSX-Code zur Darstellung der App-Komponente
  return (
    <div className="App">
      <h1>ToDo Liste</h1>
      <div className="App">
        {/* FaTwitter icon */}
        <FaTwitter size={40} />
      </div>
      <div className="task-form">
        <TextField
          label="Add a new task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <Button variant="contained" onClick={handleAddTask}>
          Add ToDo
        </Button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li className="task-item" key={index}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={task.completed}
                  onChange={() => handleToggleTask(index)}
                />
              }
              label={
                <span
                  className={`task-text ${task.completed ? 'completed' : ''}`}
                >
                  {task.text}
                </span>
              }
            />
          </li>
        ))}
      </ul>
      <CustomCancelButton variant="contained" onClick={handleClearCompleted}>
        <CancelIcon />
      </CustomCancelButton>
    </div>
  );
}

export default App;
