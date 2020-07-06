# scraper to record the trends of:
# 1) cases in each ward
# 2) deaths
# 3) discharges
#
# a scraper is necessary to keep track of these three metrics
# as the official website only releases the latest figures
# rather than the complete history of each metric.


import requests, json
from datetime import date
from git import Repo


def update_ward_data():
    # get latest data
    url = 'https://raw.githubusercontent.com/tokyo-metropolitan-gov/covid19/development/data/patient.json'
    new_data = get_json(url)
    new_cases = new_data['datasets']['data']
    
    # get existing data
    with open('./data/wardCases.json', 'r') as myfile:
        json_obj = myfile.read()
    ward_cases = json.loads(json_obj)
    
    # e.g. '2020-07-04'
    today = date.today().strftime('%Y-%m-%d')

    # append new data to existing data
    for ward in ward_cases['wardHistory']:
        ward['history'][today] = new_cases.pop(0)['count']

    # save updated data
    with open('./data/wardCases.json', 'w') as f:
        json.dump(ward_cases, f, indent=4, ensure_ascii=False)

def update_deaths_and_discharged():
    # get new data
    url = 'https://raw.githubusercontent.com/tokyo-metropolitan-gov/covid19/master/data/data.json'
    new_data = get_json(url)
    
    update_deaths(new_data)
    update_discharged(new_data)

def update_discharged(new_data):
    latest_discharged = new_data['main_summary']['children'][0]['children'][1]['value']
    
    # get existing data
    with open('./data/discharged.json', 'r') as myfile:
        json_obj = myfile.read()
    discharged = json.loads(json_obj)
    

    # e.g. '07-04-20'
    today = date.today().strftime('%m-%d-%y')

    # append new data to existing data
    discharged[today] = latest_discharged

    # save updated data
    with open('./data/discharged.json', 'w') as f:
        json.dump(discharged, f, indent=4, ensure_ascii=False)

def update_deaths(new_data):
    latest_deaths = new_data['main_summary']['children'][0]['children'][2]['value']
    
    # get existing data
    with open('./data/deaths.json', 'r') as myfile:
        json_obj = myfile.read()
    deaths = json.loads(json_obj)
    

    # e.g. '07-04-20'
    today = date.today().strftime('%m-%d-%y')

    # append new data to existing data
    deaths[today] = latest_deaths

    # save updated data
    with open('./data/deaths.json', 'w') as f:
        json.dump(deaths, f, indent=4, ensure_ascii=False)


# utility method for getting json
def get_json(url):
    response = requests.get(url)
    data = json.loads(response.text)
    return data

# commits to git repo
def commit_to_repo():
    repo = Repo('./.git')
    repo.git.add(all=True)
    repo.index.commit('automatically updated deaths/discharges and ward history')
    origin = repo.remote(name='origin')
    origin.push()


# update all data
update_ward_data()
update_deaths_and_discharged()
commit_to_repo()