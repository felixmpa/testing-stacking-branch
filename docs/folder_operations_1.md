# Folder Operations

This document tracks empty folder deletion scenarios.

1. Delete all files from a folder so the folder becomes empty.
   - Expectation: The folder should be automatically removed from the repository.
2. Delete all files from nested folders across multiple levels.
   - Expectation: Each empty folder should be removed up the directory tree.
3. Delete some but not all files from a folder.
   - Expectation: The folder should remain because it still contains files.
4. Delete files leaving only hidden files (e.g., `.gitkeep`).
   - Expectation: The folder should remain due to remaining hidden files.
5. Delete files from a mix of empty and non-empty sibling folders.
   - Expectation: Only the folders that become empty should be removed.
\nMixed operation update
