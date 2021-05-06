from selenium import webdriver
import time, os

for files in os.listdir('C:/xampp/htdocs/webapp/banana/fonts'):
    os.remove(f'C:/xampp/htdocs/webapp/banana/fonts/{files}')

with open('C:/xampp/htdocs/webapp/banana/fonts0.css', 'w') as x:
            x.write('')

with open('C:/xampp/htdocs/webapp/banana/fonts.css', 'r') as f:
    fnames= [i for i in os.listdir("C:/Users/User/Downloads")]
    lines= f.readlines()
    driver = webdriver.Chrome(executable_path = f'C:/test/chromedriver.exe')
    for line in lines:
        if 'http' in line:
            link= line.split('(')[1].split(')')[0]
            driver.get(link)
            time.sleep(2)
            fnames1= [i for i in os.listdir("C:/Users/User/Downloads")]
            new_file= [i for i in fnames1 if i not in fnames][0]
            os.rename(
                f'C:/Users/User/Downloads/{new_file}',
                f"C:/xampp/htdocs/webapp/banana/fonts/{new_file}"
            )
            fnames= fnames1
            line= line.replace(link, f'"fonts/{new_file}"')
        
        with open('C:/xampp/htdocs/webapp/banana/fonts0.css', 'a') as out:
            out.write(line)

driver.close()
