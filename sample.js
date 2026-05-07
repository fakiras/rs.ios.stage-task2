# Имя выходного файла
filename = "big_text_file.txt"

# Размер файла в байтах (4 МБ = 4 * 1024 * 1024 байт)
file_size_bytes = 4 * 1024 * 1024

# Текст, которым будем заполнять файл (повторяющаяся фраза)
text = "Это сгенерированный текст для заполнения файла. "

# Открываем файл на запись в текст режиме
with open(filename, "w", encoding="utf-8") as f:
    # Считаем длину нашей строки в байтах
    chunk_size = len(text.encode("utf-8"))
    
    # Сколько раз нужно повторить строку, чтобы достичь нужного размера
    repeat_count = file_size_bytes // chunk_size

    # Записываем текст в файл
    f.write(text * repeat_count)

print(f"Файл '{filename}' успешно создан. Размер: {file_size_bytes} байт.")
