import json
import ast

def correct_dataset(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    for book in data:
        # Corrigir o autor para ser uma lista
        if ',' in book['author']:
            book['author'] = [author.strip() for author in book['author'].split(',')]
        else:
            book['author'] = [book['author'].strip()]
        
        # Corrigir as strings que representam listas
        list_fields = ['genres', 'characters', 'awards', 'ratingsByStars', 'setting']
        for field in list_fields:
            if isinstance(book[field], str):
                try:
                    book[field] = ast.literal_eval(book[field])
                except (ValueError, SyntaxError):
                    print(f"Erro ao converter o campo {field} do livro {book['title']}")
                    book[field] = []

        # Corrigir campos numéricos
        numeric_fields = ['rating', 'pages', 'price', 'numRatings', 'likedPercent', 'bbeScore', 'bbeVotes']
        for field in numeric_fields:
            if field in book and isinstance(book[field], str):
                try:
                    if '.' in book[field]:
                        book[field] = float(book[field])
                    else:
                        book[field] = int(book[field])
                except ValueError:
                    print(f"Erro ao converter o campo {field} do livro {book['title']} para numérico")
                    book[field] = None
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

input_file = 'dataset_recurso.json'
output_file = 'dataset_corrected2.json'

correct_dataset(input_file, output_file)
