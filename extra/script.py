import json

with open('C:/xampp/htdocs/webapp/extra/reasons.txt', 'r', encoding="utf8") as file:
    lines= file.readlines()
    x={i: lines[i].strip('\n') for i in range(len(lines))}

with open('C:/xampp/htdocs/webapp/json/reasons.json', 'w') as json_file:
    json.dump(x, json_file)