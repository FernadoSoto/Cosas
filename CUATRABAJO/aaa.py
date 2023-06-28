import tkinter as tk
from tkinter import filedialog
from tkinter import messagebox
import docx
import PyPDF2

def buscar_palabra():
    palabra = entry_palabra.get()
    archivo = filedialog.askopenfilename(filetypes=[("Documentos de texto", "*.txt"), ("Documentos de Word", "*.docx"), ("Documentos PDF", "*.pdf")])
    
    if archivo:
        if archivo.endswith(".txt"):
            try:
                with open(archivo, "r") as file:
                    contenido = file.read()
                
                if palabra in contenido:
                    messagebox.showinfo("Resultado", f"La palabra '{palabra}' se encuentra en el documento.")
                else:
                    messagebox.showinfo("Resultado", f"La palabra '{palabra}' no se encuentra en el documento.")
                
            except Exception as e:
                messagebox.showerror("Error", f"Error al abrir el archivo: {str(e)}")
        
        elif archivo.endswith(".docx"):
            try:
                doc = docx.Document(archivo)
                contenido = [p.text for p in doc.paragraphs]
                
                if palabra in " ".join(contenido):
                    messagebox.showinfo("Resultado", f"La palabra '{palabra}' se encuentra en el documento.")
                else:
                    messagebox.showinfo("Resultado", f"La palabra '{palabra}' no se encuentra en el documento.")
                
            except Exception as e:
                messagebox.showerror("Error", f"Error al abrir el archivo: {str(e)}")
        
        elif archivo.endswith(".pdf"):
            try:
                with open(archivo, "rb") as file:
                    reader = PyPDF2.PdfReader(file)
                    contenido = [reader.getPage(i).extract_text() for i in range(len(reader.pages))]
                
                if palabra in " ".join(contenido):
                    messagebox.showinfo("Resultado", f"La palabra '{palabra}' se encuentra en el documento.")
                else:
                    messagebox.showinfo("Resultado", f"La palabra '{palabra}' no se encuentra en el documento.")
                
            except Exception as e:
                messagebox.showerror("Error", f"Error al abrir el archivo: {str(e)}")
    else:
        messagebox.showinfo("Información", "No se seleccionó ningún archivo.")
        

# Crear la ventana principal
ventana = tk.Tk()
ventana.title("Buscador de palabras")
ventana.geometry("400x200")

# Etiqueta y entrada para la palabra a buscar
label_palabra = tk.Label(ventana, text="Palabra:")
label_palabra.pack()

entry_palabra = tk.Entry(ventana)
entry_palabra.pack()

# Botón para buscar
btn_buscar = tk.Button(ventana, text="Buscar", command=buscar_palabra)
btn_buscar.pack()

ventana.mainloop()
