import { Request, Response } from "express";
import pool from "../db";
import { RowDataPacket } from 'mysql2';
export const createCar = async (req : Request, res: Response) => {
    const {make, model, year, price} = req.body;

    try{
        const [result] = await pool.query(
            'INSERT INTO cars (make, model, year, price) VALUES (?,?,?,?)',
                [make, model, year, price]
        );

        res.status(201).json(
            {
                message : "Card record created successfully", 
                carId : (result as any).insertId
            }
        );
    }catch(error){
        res.status(500).json({error : 'something went wrong'});
    }
}

export const updateCar = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { make, model, year, price } = req.body;
  
    try {
      const [result] = await pool.query(
        'UPDATE cars SET make = ?, model = ?, year = ?, price = ? WHERE id = ?',
        [make, model, year, price, id]
      );
  
      if ((result as any).affectedRows === 0) {
        return res.status(404).json({ message: 'Car not found' });
      }
  
      res.status(200).json({ message: 'Car updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Database error' });
    }
  };
  

  export const getAllCars = async (req: Request, res: Response) => {
    try {
      const [rows] = await pool.query('SELECT * FROM cars');
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ error: 'Database error' });
    }
  };
  

// Get single car by ID
export const getCarById = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const [rows] = await pool.query<RowDataPacket[]>('SELECT * FROM cars WHERE id = ?', [id]);
  
      if (rows.length === 0) {
        return res.status(404).json({ message: 'Car not found' });
      }
  
      res.status(200).json(rows[0]);
    } catch (error) {
      res.status(500).json({ error: 'Database error' });
    }
  };
  

  export const deleteCar = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const [result] = await pool.query('DELETE FROM cars WHERE id = ?', [id]);
  
      if ((result as any).affectedRows === 0) {
        return res.status(404).json({ message: 'Car not found' });
      }
  
      res.status(200).json({ message: 'Car deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Database error' });
    }
  };
  