#!/bin/bash

# Get current project name
current_project_name=$(grep -oP "(?<=name\": \").*(?=\")" package.json)
echo "📦 Current project name: $current_project_name"

# Function to find files recursively
find_files() {
    find . -type f -not -path "*/node_modules/*" -not -path "*/.git/*"
}

# Function to prompt for new project name
prompt_new_project_name() {
    read -rp "📝 Enter new project name: " project_name
    echo "$project_name"
}

# Function to prompt for confirmation (Default: n)
prompt_confirmation() {
    local project_name=$1
    read -rp "🤔 Are you sure you want to rename the project to $project_name? (y/n): " confirm
    echo "$confirm"
}

# Function to rename project
process_files() {
    local files=$1
    local project_name=$2

    # Rename project name in files
    echo "$files" | while IFS= read -r file; do
        sed -i "s/$current_project_name/$project_name/g" "$file"
    done

    echo "✅ Project renamed to $project_name."
}

# Main script logic
files=$(find_files)
project_name=$(prompt_new_project_name)
confirm=$(prompt_confirmation "$project_name")

if [ "$confirm" = "y" ] || [ "$confirm" = "Y" ]; then
    process_files "$files" "$project_name"
else
    echo "❌ Project renaming aborted."
fi
