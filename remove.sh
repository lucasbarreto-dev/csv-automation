#!/bin/bash

clear

echo "Counting CSV files..."

# Count the number of CSV files in the directory
num_csv_files=$(find . -maxdepth 1 -type f -name "*.csv" | wc -l)

echo "Removing the CSV files..."

sleep 1

rm -rf *.csv

echo "$num_csv_files files were removed!"
