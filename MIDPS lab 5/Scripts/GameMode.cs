﻿using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class GameMode : MonoBehaviour
{
    public int lives = 3;
    public int bricks = 20;
    public float resetDelay = 1f;
    public Text livesText;
    public GameObject gameOver;
    public GameObject youWon;
    public GameObject bricksPrefab;
    public GameObject paddle;
    public GameObject deathParticles;
    public static GameMode instance = null;

    private GameObject clonePaddle;
	
	void Start ()
    {
        if (instance == null)
        {
            instance = this;
        }
        else if (instance != this)
            Destroy(gameObject);

        Setup();
	}
	
	public void Setup ()
    {
        clonePaddle = Instantiate(paddle, transform.position, Quaternion.identity) as GameObject;
        Instantiate(bricksPrefab, bricksPrefab.transform.position, Quaternion.identity);
	}

    void CheckGameOver ()
    {
        if(bricks < 1)
        {
            youWon.SetActive(true);
            Time.timeScale = .25f;
            Invoke("Reset", resetDelay);
        }

        if(lives < 1)
        {
            gameOver.SetActive(true);
            Time.timeScale = .25f;
            Invoke("Reset", resetDelay);
        }
    }

    void Reset ()
    {
        Time.timeScale = 1f;
#pragma warning disable CS0618 // Type or member is obsolete
        Application.LoadLevel(Application.loadedLevel);
#pragma warning restore CS0618 // Type or member is obsolete
    }

    public void LoseLife ()
    {
        lives--;
        livesText.text = "Lives: " + lives;
        Instantiate(deathParticles, clonePaddle.transform.position, Quaternion.identity);
        Destroy(clonePaddle);
        Invoke("SetupPaddle", resetDelay);
        CheckGameOver();        
    }

    void SetupPaddle ()
    {
        clonePaddle = Instantiate(paddle, transform.position, Quaternion.identity) as GameObject;
    }

    public void DestroyBricks ()
    {
        bricks--;
        CheckGameOver();
    }
}
