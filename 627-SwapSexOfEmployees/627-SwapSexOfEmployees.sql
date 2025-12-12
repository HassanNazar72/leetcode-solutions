-- Last updated: 12/12/2025, 02:10:50
# Write your MySQL query statement below

UPDATE salary
SET sex = CASE
            WHEN sex = 'm' THEN 'f'
            WHEN sex = 'f' THEN 'm'
            ELSE sex
          END;
