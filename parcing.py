import csv
import os
import pandas as pd
import matplotlib as plt
import numpy as np
import json

# 2) Assign a variable for the file to load and the path.
governorParties = os.path.join("C:\\Users", "amnic", "Desktop", "dangerousCities", "governorParties.csv")
stateFirearmDeaths = os.path.join("C:\\Users", "amnic", "Desktop", "dangerousCities", "stateFirearmDeaths.csv")
stateFPDeaths = os.path.join("C:\\Users", "amnic", "Desktop", "dangerousCities", "stateFluPneuDeaths.csv")
stateHomicides = os.path.join("C:\\Users", "amnic", "Desktop", "dangerousCities", "stateHomicides.csv")
statePops = os.path.join("C:\\Users", "amnic", "Desktop", "dangerousCities", "statePops.csv")

# Read the school data file and store it in a Pandas DataFrame.
governorParties_df = pd.read_csv(governorParties)
statePops_df = pd.read_csv(statePops)
stateFirearmDeaths_df = pd.read_csv(stateFirearmDeaths)
stateFPDeaths_df = pd.read_csv(stateFPDeaths)
stateHomicides_df = pd.read_csv(stateHomicides)

# Make sure they are all in alphabetical order
governorParties_df = governorParties_df.sort_values('State')
statePops_df = statePops_df.sort_values('State')
stateFirearmDeaths_df = stateFirearmDeaths_df.sort_values('STATE')
stateFPDeaths_df = stateFPDeaths_df.sort_values('STATE')
stateHomicides_df = stateHomicides_df.sort_values('STATE')

### Set up the basics for the data set
# Make data series to hold all dictionaries moving forward
data = []

# Make a list of states and append it to the data dictionaries
states = []
for state in governorParties_df['State']:
    states.append(state)

# Add states to the dictionary data
for state in states:
    data.append({"state": state})

# Set variable for iterations
state_range = range(len(data))

# Add the years to the data dictionaries
years = ['2014', '2015', '2016', '2017', '2018']

# Add dictionary of lists for each year
for state in state_range:
    for year in years:
        data[state].update({f'{year}': []})

### Add governorParties to dictionary
# Add the governor parties to the list by year
for state in states:
    for code in governorParties_df['State']:
        if state == code:
            for year in years:
                for state_no in state_range:
                    if data[state_no]['state'] == code:
                        data[state_no][year].append({"GovParty": governorParties_df[f'GP{year}'][state_no]})
            
### Add statePops to dictionary
# Add the population per area information to the list by year
for state in states:
    for code in statePops_df['State']:
        if state == code:
            for year in years:
                for state_no in state_range:
                    if data[state_no]['state'] == code:
                        data[state_no][year].append({"PopulationPerArea": str(statePops_df[f'PPA{year}'][state_no])})
            
# All data from statePops_df is now populated into the data set

### Build function for adding yearly data
def addYearlyData(key, dfname, index):
    try:  
        for year in years:
            year_num = int(year)
            df = dfname.loc[dfname['YEAR'] == year_num].sort_values('STATE').reset_index(drop=True)

            for state in states:
                for code in df['STATE']:
                    if state == code:
                        for state_no in state_range:
                            if data[state_no]['state'] == code:
                                rowrate = df['RATE'][state_no]
                                rowdeaths = df['DEATHS'][state_no]

                                data[state_no][year].append({key: []})

                                data[state_no][year][index][key].append({'Rate': str(rowrate)})
                                data[state_no][year][index][key].append({'Deaths': str(rowdeaths)})
    except:
        print('Error. Enter correct: key, dfname, index for appending data')

### Add CDC data to dictionary
addYearlyData('Firearms', stateFirearmDeaths_df, 2)
addYearlyData('FluPneumonia', stateFPDeaths_df, 3)
addYearlyData('Homicides', stateHomicides_df, 4)

# Save json file
json = json.dumps(data, separators=(',',':'), indent=4)
f = open("data_indent.json","w")
f.write(json)
f.close()