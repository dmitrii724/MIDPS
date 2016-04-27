using UnityEngine;
using System.Collections;

public class Pause : MonoBehaviour
{
    public GameObject pauseButton, pausePanel, ExitButton, FacebookButton;

    public void Start()
    {
        UnPauseFunction();
    }

	public void PauseFunction()
    {
        pausePanel.SetActive(true);
        pauseButton.SetActive(false);
        Time.timeScale = 0;
    }

    public void UnPauseFunction()
    {
        pausePanel.SetActive(false);
        pauseButton.SetActive(true);
        Time.timeScale = 1;
    }

    public void ExitFunction()
    {
        Application.Quit();
    }

    public void Facebook()
    {
        Application.OpenURL("www.facebook.com");
    }
}
